import React from 'react';
import { Target, Eye, Heart, Users, Globe, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Heart className="text-morocco-red-600" size={32} />,
      title: 'Cultural Authenticity',
      description: 'We prioritize authentic representation of Moroccan musical traditions, working directly with cultural bearers and traditional artists.'
    },
    {
      icon: <Users className="text-morocco-ochre-600\" size={32} />,
      title: 'Community Partnership',
      description: 'Our projects are developed in collaboration with local communities, ensuring their voices and perspectives are central to our work.'
    },
    {
      icon: <Globe className="text-morocco-blue-600" size={32} />,
      title: 'Global Impact',
      description: 'While rooted in Morocco, our mission extends globally, sharing our musical heritage with international audiences.'
    },
    {
      icon: <Award className="text-morocco-red-600\" size={32} />,
      title: 'Excellence in Documentation',
      description: 'We maintain the highest standards in recording, archiving, and presenting musical traditions for future generations.'
    }
  ];

  const achievements = [
    { number: '127', label: 'Traditional Musicians Documented' },
    { number: '43', label: 'Recording Projects Completed' },
    { number: '12', label: 'Regions of Morocco Covered' },
    { number: '8', label: 'Musical Genres Preserved' }
  ];

  return (
    <div className="py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">About Sounds of Morocco</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Dedicated to preserving, documenting, and celebrating the rich musical heritage of Morocco 
            for current and future generations.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Mission Statement */}
          <div className="bg-[#f4debd] rounded-2xl shadow-sm p-8 border border-morocco-red-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-morocco-red-100 rounded-full flex items-center justify-center mr-4">
                <Target className="text-morocco-red-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              To document, preserve, and share Morocco's diverse musical traditions through high-quality recordings, 
              educational content, and cultural exchange programs. We work directly with traditional musicians, 
              cultural communities, and local organizations to ensure authentic representation while providing 
              fair compensation and recognition to artists.
            </p>
          </div>

          {/* Vision Statement */}
          <div className="bg-[#f4debd] rounded-2xl shadow-sm p-8 border border-morocco-blue-100">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-morocco-blue-100 rounded-full flex items-center justify-center mr-4">
                <Eye className="text-morocco-blue-600" size={32} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed text-lg">
              A world where Morocco's musical heritage is recognized, celebrated, and accessible to all. 
              We envision our work contributing to a global understanding of cultural diversity and the 
              universal language of music, while empowering local artists and communities to continue 
              their traditions with pride and economic sustainability.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              These core principles guide every aspect of our work and define our commitment to cultural preservation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-[#f4debd] rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-morocco-ochre-50 to-morocco-red-50 rounded-2xl p-8 border border-morocco-ochre-200">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Our Impact</h2>
              <p className="text-lg text-gray-700">
                Numbers that reflect our commitment to preserving Morocco's musical heritage
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-morocco-red-600 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-700 font-medium">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="bg-[#f4debd] rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 text-center">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-6">
                Sounds of Morocco began in 2020 as a passion project by a group of ethnomusicologists, 
                cultural researchers, and audio engineers who recognized the urgent need to document 
                Morocco's rapidly changing musical landscape. What started as informal recording sessions 
                in Marrakech's medina has grown into a comprehensive cultural preservation initiative.
              </p>
              <p className="mb-6">
                Our founders were inspired by the realization that many traditional musical forms were 
                at risk of being lost as older generations of musicians passed away without adequate 
                documentation of their knowledge and skills. This concern was coupled with a recognition 
                that Morocco's musical traditions deserve wider international recognition and appreciation.
              </p>
              <p className="mb-6">
                Today, we work across all regions of Morocco, from the Rif Mountains in the north to 
                the Sahara Desert in the south, documenting everything from sacred Sufi ceremonies to 
                contemporary urban chaabi music. Our approach combines traditional ethnomusicological 
                methods with modern digital preservation techniques and community-centered practices.
              </p>
              <p>
                Every project we undertake is developed in partnership with local communities and 
                cultural bearers, ensuring that our work serves not just academic or artistic purposes, 
                but also supports the economic and cultural vitality of the communities we document.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-morocco-blue-600 to-morocco-red-600 text-white rounded-2xl p-12">
          <h2 className="text-3xl font-display font-bold mb-4">
            Join Our Cultural Mission
          </h2>
          <p className="text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Whether through donations, purchases, or simply sharing our work, you can be part of 
            preserving Morocco's musical heritage for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-[#f4debd] text-morocco-red-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
              Support Our Projects
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-morocco-red-600 transition-colors">
              Learn More
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;