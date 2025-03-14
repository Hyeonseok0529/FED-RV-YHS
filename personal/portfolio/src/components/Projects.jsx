import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Project 1</h3>
            <p className="text-lg">A cool project that I worked on...</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Project 2</h3>
            <p className="text-lg">Another awesome project...</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Project 3</h3>
            <p className="text-lg">A fantastic project...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;