// DC.com 날씨위젯 컴포넌트 - Weather.jsx
// -> 함수형 컴포넌트로 구현!

// 날씨 컴포넌트 SCSS
import { useState, useEffect } from "react";
import "../../css/modules/weather.scss";

// 엑시오스 불러오기
import axios from "axios";

const Weather = () => {
  // 상태 변수 설정
  const [weather, setWeather] = useState({
    temp: "",
    desc: "",
    icon: "",
    loading: true,
    city: "",
  });

  // 사용자의 현재 위치 정보를 받아오는 함수
  const getCityName = (lat, lon) => {
    const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
    return axios.get(geoApiUrl).then(response => response.data.city);
  };

  // 컴포넌트가 마운트될 때 실행되는 useEffect
  useEffect(() => {
    // Geolocation API를 사용하여 현재 위치 가져오기
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          getCityName(latitude, longitude).then(cityName => {
            const apiKey = "7fdf8fb74f3e2ed02bfb7e298a32df49";
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;

            // axios 라이브러리를 이용한 데이터 조회하기
            axios
              .get(url)
              .then((result) => {
                const wData = result.data;
                setWeather({
                  temp: wData.main.temp,
                  desc: wData.weather[0].description,
                  icon: wData.weather[0].icon,
                  loading: false,
                  city: cityName,
                });
              })
              .catch((err) => console.log(err));
          });
        },
        error => {
          console.log(error);
          alert("위치 정보를 가져오는데 실패했습니다.");
        }
      );
    } else {
      alert("Geolocation을 지원하지 않는 브라우저입니다.");
    }
  }, []);

  // 아이콘 정보 = API업체 url
  const isrc = `https://openweathermap.com/img/w/${weather.icon}.png`;

  // 로딩중 loading 값이 true이면
  if (weather.loading) {
    return <h4>Loading...</h4>;
  } else {
    // 절대온도이므로 섭씨온도로 바꾼다
    // 절대온도 - 273.15
    // 소수점도 한자리만 표시
    let ctemp = (parseInt(weather.temp) - 273.15).toFixed(1);

    return (
      <div className="weather-bx">
        <h4>Now Weather</h4>
        <h5>{weather.city}</h5>
        <img src={isrc} alt="weather icon" />
        <p>{ctemp}℃</p>
        <p>{weather.desc}</p>
      </div>
    );
  }
};

// Weather 컴포넌트 끝

export default Weather;

// 내보내기 끝