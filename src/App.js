import React, { useState } from 'react';
import Header from './components/Header';  // Ensure Header component exists
import HeroSection from './components/HeroSection';  // Ensure HeroSection component exists
import About from './components/About';  // Ensure About component exists
import Events from './components/Events';  // Ensure Events component exists
import Gallery from './components/Gallery';  // Ensure Gallery component exists
import Contact from './components/Contact';  // Ensure Contact component exists
import 'bootstrap/dist/css/bootstrap.min.css';  // Import Bootstrap
import './index.css';  // Ensure this is correctly placed

// Move MemberList outside of App component
const MemberList = () => {
  const [membersData, setMembersData] = useState([
    { id: 1, name: 'Gading', description: 'Full Stack Developer', education: 'Bachelor in Computer Science', experience: '3 years experience in web development', contact: 'gading@example.com', cvLink: '#', photo: 'https://www.w3schools.com/w3images/avatar2.png', whatsapp: '1234567890', email: 'john@example.com' },
    { id: 2, name: 'Ryan', description: 'UI/UX Designer', education: 'Master in Graphic Design', experience: '2 years experience in UI/UX', contact: 'ryan@example.com', cvLink: '#', photo: 'https://www.w3schools.com/w3images/avatar6.png', whatsapp: '0987654321', email: 'jane@example.com' },
    { id: 3, name: 'Alif', description: 'Project Manager', education: 'MBA in Project Management', experience: '5 years managing IT projects', contact: 'alif@example.com', cvLink: '#', photo: 'https://www.w3schools.com/w3images/avatar5.png', whatsapp: '1122334455', email: 'mark@example.com' },
    { id: 4, name: 'Ridho', description: 'Software Engineer', education: 'Bachelor in Software Engineering', experience: '4 years in backend development', contact: 'ridho@example.com', cvLink: '#', photo: 'https://www.w3schools.com/w3images/avatar4.png', whatsapp: '6677889900', email: 'emily@example.com' },
    { id: 5, name: 'Adi', description: 'DevOps Engineer', education: 'Bachelor in Information Technology', experience: '3 years in cloud infrastructure', contact: 'adi@example.com', cvLink: '#', photo: 'https://www.w3schools.com/w3images/avatar3.png', whatsapp: '9988776655', email: 'paul@example.com' },
    { id: 6, name: 'Mas Bintang', description: 'Data Scientist', education: 'Master in Data Science', experience: '2 years in machine learning', contact: 'masbintang@example.com', cvLink: '#', photo: 'https://www.w3schools.com/w3images/avatar2.png', whatsapp: '1231231234', email: 'sarah@example.com' },
  ]);

  // Limit the members to show only the first 6
  const displayedMembers = membersData.slice(0, 6);

  return (
    <section id="members" className="members-section">
      <div className="container text-center">
        <h2>Meet Our Members</h2>
        <div className="row">
          {displayedMembers.map((member, index) => (
            <div key={index} className="col-md-4 member-card">
              <div className="member-details">
                <img src={member.photo} alt={member.name} className="member-photo" />
                <h4>{member.name}</h4>
                <p><strong>Deskripsi:</strong> {member.description}</p>
                <p><strong>Pendidikan:</strong> {member.education}</p>
                <p><strong>Pengalaman:</strong> {member.experience}</p>
                <p><strong>Kontak:</strong> {member.contact}</p>
                <a href={member.cvLink} className="btn-custom" download>Unduh CV</a>

                <div className="contact-buttons">
                  <a href={`https://wa.me/${member.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn-contact btn-whatsapp">
                    Contact via WhatsApp
                  </a>
                  <a href={`mailto:${member.email}`} className="btn-contact btn-email">
                    Contact via Email
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <HeroSection />
      <About />
      <Events />
      <Gallery />
      <MemberList />  {/* Member List section */}
      <Contact />
    </div>
  );
}

export default App;
