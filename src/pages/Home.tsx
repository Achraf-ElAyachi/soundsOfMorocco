import React from 'react';
import { ArrowRight, Users, Target, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import leaderImg from '../assets/Team/leader.jpg';
import imaneImg from '../assets/Team/imane.jpg';
import mounaImg from '../assets/Team/mouna.jpg';
import yassineImg from '../assets/Team/yassine.jpg';
import younessImg from '../assets/Team/youness.jpg';
import jalalImg from '../assets/Team/jalal.jpg';
import verticalLogoWhite from '../assets/Vertical_Logo_White.png';

const Home: React.FC = () => {
  const partners = [
    { name: "L'Blend", logo: "🎵" },
    { name: "Glory RM", logo: "🎤" },
    { name: "Anouri", logo: "🎸" },
    { name: "Kasseta", logo: "📼" },
    { name: "OPE", logo: "🎺" },
    { name: "L'Uzine", logo: "🏭" },
  ];

  const teamMembers = [
    {
      name: "Yasser",
      role: "Project Leader",
      bio: "Ethnomusicologist and cultural preservationist with 15 years of experience documenting Moroccan musical traditions.",
      image: leaderImg,
      isLeader: true,
    },
    {
      name: "Imane",
      role: "Team Member",
      bio: "Team member passionate about Moroccan music and culture.",
      image: imaneImg,
      isLeader: false,
    },
    {
      name: "Mouna",
      role: "Team Member",
      bio: "Team member passionate about Moroccan music and culture.",
      image: mounaImg,
      isLeader: false,
    },
    {
      name: "Yassine",
      role: "Team Member",
      bio: "Team member passionate about Moroccan music and culture.",
      image: yassineImg,
      isLeader: false,
    },
    {
      name: "Youness",
      role: "Team Member",
      bio: "Team member passionate about Moroccan music and culture.",
      image: younessImg,
      isLeader: false,
    },
    {
      name: "Jalal",
      role: "Team Member",
      bio: "Team member passionate about Moroccan music and culture.",
      image: jalalImg,
      isLeader: false,
    },
  ];

  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="relative text-white" style={{ backgroundColor: 'rgb(51, 51, 255)' }}>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <img src={verticalLogoWhite} alt="Sounds of Morocco Logo" className="mx-auto mb-6 w-40 md:w-56 lg:w-64" />
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              A cultural journey through Morocco's rich musical heritage, documenting and preserving 
              the authentic sounds that have shaped our nation's identity across generations.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center px-8 py-3 bg-morocco-ochre-600 hover:bg-morocco-ochre-700 text-white font-semibold rounded-lg transition-colors group"
            >
              Explore Our Projects
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Project Vision */}
      <section className="py-16" style={{ backgroundColor: '#f4debd' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Our Cultural Vision
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We believe in the power of music to transcend boundaries and preserve cultural identity. 
              Our mission is to document, celebrate, and share Morocco's diverse musical landscape 
              with the world while supporting local artists and communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-morocco-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-morocco-red-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cultural Preservation</h3>
              <p className="text-gray-600">
                Documenting traditional music forms before they fade into history, ensuring future generations can access their heritage.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-morocco-ochre-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-morocco-ochre-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Artist Support</h3>
              <p className="text-gray-600">
                Empowering local musicians and storytellers by providing platforms for their art and fair compensation for their contributions.
              </p>
            </div>
            
            <div className="text-center p-6 bg-gray-50 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-morocco-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-morocco-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Outreach</h3>
              <p className="text-gray-600">
                Sharing Morocco's musical richness with international audiences through digital platforms and cultural exchange.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16" style={{ backgroundColor: '#f4debd' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600">
              Passionate individuals dedicated to preserving and sharing Morocco's musical heritage
            </p>
          </div>

          {/* Project Leader */}
          <div className="mb-12">
            <div className="rounded-2xl p-8" style={{ background: 'linear-gradient(90deg, #e2d6c2 0%, #b8b0a1 100%)' }}>
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <img
                  src={leaderImg}
                  alt={teamMembers[0].name}
                  className="w-32 h-32 rounded-full object-cover border-4 border-morocco-red-200"
                />
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                    <span className="px-3 py-1 bg-morocco-red-600 text-white text-sm font-semibold rounded-full">
                      Project Leader
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{teamMembers[0].name}</h3>
                  <p className="text-morocco-red-600 font-semibold mb-3">{teamMembers[0].role}</p>
                  <p className="text-gray-600 max-w-2xl">{teamMembers[0].bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Other Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(1).map((member, index) => (
              <div key={index} className="bg-[#f4debd] rounded-xl shadow-sm hover:shadow-2xl transition-all duration-500 hover:scale-105 transform will-change-transform p-6 text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto mb-4 border-3 border-gray-200"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-morocco-ochre-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16" style={{ backgroundColor: '#f4debd' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-lg text-gray-600">
              Collaborating with leading organizations to amplify Morocco's musical voice
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-[#f4debd] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h3 className="font-semibold text-gray-900">{partner.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-morocco-red-600 to-morocco-ochre-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Join Our Cultural Journey
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Support our mission to preserve and celebrate Morocco's musical heritage. 
            Every contribution helps keep our traditions alive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/donations"
              className="px-8 py-3 bg-white text-morocco-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Make a Donation
            </Link>
            <Link
              to="/shop"
              className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-morocco-red-600 transition-colors"
            >
              Visit Our Shop
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;