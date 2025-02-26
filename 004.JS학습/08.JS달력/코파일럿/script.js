document.addEventListener('DOMContentLoaded', function() {
    const prevMonthButton = document.getElementById('prevMonth');
    const nextMonthButton = document.getElementById('nextMonth');
    const monthYearDisplay = document.getElementById('monthYear');
    const calendarBody = document.getElementById('calendarBody');

    let currentDate = new Date();
    let startDate = null;
    let endDate = null;

    function renderCalendar() {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        monthYearDisplay.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

        const firstDayOfMonth = new Date(year, month, 1).getDay();
        const lastDateOfMonth = new Date(year, month + 1, 0).getDate();

        calendarBody.innerHTML = '';

        let calendarHTML = '';
        let dayCounter = 1;

        for (let row = 0; row < 6; row++) {
            let weekHTML = '<tr>';
            for (let col = 0; col < 7; col++) {
                let cellHTML = '';

                if (row === 0 && col < firstDayOfMonth) {
                    cellHTML = '<td class="inactive"></td>';
                } else if (dayCounter > lastDateOfMonth) {
                    cellHTML = '<td class="inactive"></td>';
                } else {
                    const date = new Date(year, month, dayCounter);
                    cellHTML = `<td data-date="${date.toISOString()}">${dayCounter}</td>`;
                    dayCounter++;
                }

                weekHTML += cellHTML;
            }
            weekHTML += '</tr>';

            calendarHTML += weekHTML;

            if (dayCounter > lastDateOfMonth) {
                break;
            }
        }

        calendarBody.innerHTML = calendarHTML;

        highlightRange();
    }

    function highlightRange() {
        const cells = calendarBody.querySelectorAll('td[data-date]');
        cells.forEach(cell => {
            const cellDate = new Date(cell.getAttribute('data-date'));
            cell.classList.remove('active', 'range');

            if (startDate && endDate) {
                if (cellDate >= startDate && cellDate <= endDate) {
                    cell.classList.add('range');
                }
                if (cellDate.getTime() === startDate.getTime() || cellDate.getTime() === endDate.getTime()) {
                    cell.classList.add('active');
                }
            } else if (startDate && cellDate.getTime() === startDate.getTime()) {
                cell.classList.add('active');
            }
        });
    }

    function handleDateClick(event) {
        const target = event.target;
        if (target.tagName.toLowerCase() === 'td' && !target.classList.contains('inactive')) {
            const clickedDate = new Date(target.getAttribute('data-date'));

            if (!startDate || (startDate && endDate)) {
                startDate = clickedDate;
                endDate = null;
            } else if (startDate && !endDate) {
                if (clickedDate < startDate) {
                    endDate = startDate;
                    startDate = clickedDate;
                } else {
                    endDate = clickedDate;
                }
            }

            highlightRange();
        }
    }

    prevMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    });

    nextMonthButton.addEventListener('click', function() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    });

    calendarBody.addEventListener('click', handleDateClick);

    renderCalendar();
});