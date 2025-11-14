import React from "react";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Home component with Navbar, Hero, About, Gallery, Apply section placeholder, Footer
function Home() {
  return (
    <div className="app-container">
      <header className="navbar">
        <div className="logo">Bokamoso Educare Centre</div>
        <nav>
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#gallery">Gallery</a>
          <a href="#apply">Apply</a>
        </nav>
      </header>

      <section id="home" className="hero-section">
        <h1>Welcome to Bokamoso Educare Centre</h1>
        <p>Planting Seeds of Knowledge and Care🌈</p>
      </section>

      <section id="about" className="about-section">
        <h2>About Us</h2>
        <p>We provide a safe, loving, and nurturing environment for children to learn, play, and grow.</p>
        <h3>Our Mission</h3>
        <p>Our mission is to provide a warm, inclusive, and stimulating environment that supports the holistic development for our children.</p>
        <h3>Our Vision</h3>
        <p>To be a leading daycare centre recognized for excellence, creativity, by fostering love for learning and empowering them to reach their full potential.</p>
      </section>

      <section id="gallery" className="gallery-section">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <div className="gallery-item">Image 1</div>
          <div className="gallery-item">Image 2</div>
          <div className="gallery-item">Image 3</div>
        </div>
      </section>

      <section id="apply" className="apply-section">
        <h2>Apply for Admission</h2>
        <p>Online application form coming next...</p>
        <Link
          to="/apply"
          className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-xl hover:bg-pink-600 transition inline-block"
        >
          Apply Online
        </Link>
      </section>

      <footer className="footer">© Bokamoso Educare Centre</footer>
    </div>
  );
}

// Application Form component
function ApplicationForm() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-6">
      <h2 className="text-3xl font-bold text-pink-700 mb-6">Online Application Form</h2>
      <form className="w-full max-w-xl bg-gray-100 p-6 rounded-2xl shadow-md space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold">Child's Full Name</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Enter child's name" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Parent/Guardian Name</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Enter parent name" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Parent Phone Number</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="e.g. 067 123 4567" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Parent Address</label>
          <input type="text" className="w-full p-2 rounded border" placeholder="Enter parent address" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Upload Birth Certificate</label>
          <input type="file" className="w-full" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Upload Child Photo</label>
          <input type="file" className="w-full" />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold">Upload Clinic Card</label>
          <input type="file" className="w-full" />
        </div>
        <button className="w-full bg-pink-600 text-white py-3 rounded-xl hover:bg-pink-700 transition">
          Submit Application
        </button>
      </form>
    </div>
  );
}

// Main App with routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>
    </Router>
  );
}

export default App;

