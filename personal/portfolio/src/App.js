import logo from './logo.svg';
import './App.css';

function App() {
   return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* Header */}
      <header className="bg-blue-600 text-white py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-3xl font-bold">Your Name</h1>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-200">About</a></li>
              <li><a href="#projects" className="hover:text-blue-200">Projects</a></li>
              <li><a href="#skills" className="hover:text-blue-200">Skills</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Profile Section */}
      <section id="about" className="py-20 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <img src="your-photo.jpg" alt="Your Name" className="w-32 h-32 rounded-full mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-4">Hello, I'm Your Name</h2>
          <p className="text-lg text-gray-700">
            I am a passionate web developer with experience in building responsive and interactive websites.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Project Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="project1.jpg" alt="Project 1" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Project One</h3>
              <p className="text-gray-600">A description of the project and the technologies used.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">View Project</a>
            </div>
            {/* Project Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="project2.jpg" alt="Project 2" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Project Two</h3>
              <p className="text-gray-600">A description of the project and the technologies used.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">View Project</a>
            </div>
            {/* Project Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img src="project3.jpg" alt="Project 3" className="w-full h-48 object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-semibold">Project Three</h3>
              <p className="text-gray-600">A description of the project and the technologies used.</p>
              <a href="#" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">View Project</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Skills</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            <div className="p-4 bg-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">HTML</h3>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">CSS</h3>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">JavaScript</h3>
            </div>
            <div className="p-4 bg-gray-200 rounded-lg">
              <h3 className="text-xl font-semibold">React</h3>
            </div>
            {/* Add more skills */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Contact</h2>
          <p className="text-lg text-gray-700 mb-4">
            Feel free to reach out for collaboration or job opportunities.
          </p>
          <a href="mailto:youremail@example.com" className="text-blue-600 hover:text-blue-800">Email me</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
