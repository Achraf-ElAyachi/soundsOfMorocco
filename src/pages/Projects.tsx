import React, { useState } from 'react';
import { MapPin, Play, Music, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  const projects = [
    {
      id: 1,
      region: 'Marrakech-Safi',
      city: 'Marrakech',
      title: 'Gnawa Rhythms of the Red City',
      description: 'Documenting the spiritual and musical traditions of Gnawa masters in Marrakech\'s medina.',
      artist: 'Maalem Hassan Boussou',
      artistBio: 'A third-generation Gnawa master who has dedicated his life to preserving the sacred rhythms and ceremonies of his ancestors.',
      artistImage: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      spotifyEmbed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd',
      youtubeId: 'dQw4w9WgXcQ',
      coordinates: [31.6295, -7.9811],
      status: 'Completed',
      date: '2024-03-15'
    },
    {
      id: 2,
      region: 'Fès-Meknès',
      city: 'Fès',
      title: 'Andalusian Melodies',
      description: 'Exploring the classical Andalusian music traditions preserved in the cultural capital of Morocco.',
      artist: 'Aicha El-Filali',
      artistBio: 'Renowned vocalist and interpreter of classical Andalusian poetry, trained in the traditional maqam systems.',
      artistImage: 'https://images.pexels.com/photos/3783763/pexels-photo-3783763.jpeg?auto=compress&cs=tinysrgb&w=400',
      spotifyEmbed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd',
      youtubeId: 'dQw4w9WgXcQ',
      coordinates: [34.0181, -5.0078],
      status: 'In Progress',
      date: '2024-04-01'
    },
    {
      id: 3,
      region: 'Souss-Massa',
      city: 'Agadir',
      title: 'Berber Folk Songs',
      description: 'Recording traditional Amazigh songs and stories from the Atlas Mountains region.',
      artist: 'Mohand Oubrahim',
      artistBio: 'Traditional storyteller and musician who carries the oral traditions of the Souss valley.',
      artistImage: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      spotifyEmbed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd',
      youtubeId: 'dQw4w9WgXcQ',
      coordinates: [30.4278, -9.5981],
      status: 'Upcoming',
      date: '2024-05-20'
    },
    {
      id: 4,
      region: 'Tangier-Tetouan-Al Hoceima',
      city: 'Tangier',
      title: 'Chaabi Chronicles',
      description: 'Capturing the contemporary folk music that emerged from Morocco\'s northern coastal cities.',
      artist: 'Abdellah Chahid',
      artistBio: 'Modern chaabi artist who bridges traditional melodies with contemporary urban experiences.',
      artistImage: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      spotifyEmbed: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd',
      youtubeId: 'dQw4w9WgXcQ',
      coordinates: [35.7595, -5.8340],
      status: 'Completed',
      date: '2024-02-10'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-morocco-ochre-100 text-morocco-ochre-800';
      case 'Upcoming':
        return 'bg-morocco-blue-100 text-morocco-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Documenting Morocco's diverse musical landscape across all regions, 
            from traditional folk songs to contemporary expressions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Interactive Map Placeholder */}
          <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-gray-600" size={48} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Interactive Project Map</h3>
              <p className="text-gray-600">
                Map visualization showing project locations across Morocco
              </p>
            </div>
          </div>

          {/* Project List */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">All Projects</h2>
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-[#f4debd] rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-sm text-morocco-ochre-600 font-medium">{project.region}</span>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  {new Date(project.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <button
                  onClick={() => setSelectedRegion(project.id.toString())}
                  className="text-morocco-red-600 hover:text-morocco-red-700 font-medium flex items-center"
                >
                  View Details
                  <Play size={16} className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Region Detail Modal/Section */}
        {selectedRegion && (
          <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
            {projects
              .filter(p => p.id.toString() === selectedRegion)
              .map((project) => (
                <div key={project.id} className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
                        {project.title}
                      </h2>
                      <p className="text-morocco-ochre-600 font-medium">{project.city}, {project.region}</p>
                    </div>
                    <button
                      onClick={() => setSelectedRegion(null)}
                      className="text-gray-400 hover:text-gray-600 text-xl"
                    >
                      ×
                    </button>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Artist Information */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Featured Artist</h3>
                      <div className="bg-gray-50 rounded-xl p-6">
                        <div className="flex items-center mb-4">
                          <img
                            src={project.artistImage}
                            alt={project.artist}
                            className="w-16 h-16 rounded-full object-cover mr-4"
                          />
                          <div>
                            <h4 className="font-semibold text-gray-900">{project.artist}</h4>
                            <p className="text-morocco-ochre-600">Artist</p>
                          </div>
                        </div>
                        <p className="text-gray-600">{project.artistBio}</p>
                      </div>
                    </div>

                    {/* Media Section */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Listen & Watch</h3>
                      <div className="space-y-4">
                        {/* Spotify Embed Placeholder */}
                        <div className="bg-green-50 rounded-xl p-6 text-center">
                          <Music className="mx-auto mb-2 text-green-600" size={32} />
                          <p className="text-green-800 font-medium">Spotify Playlist</p>
                          <p className="text-green-600 text-sm">Listen to recorded tracks</p>
                        </div>

                        {/* YouTube Embed Placeholder */}
                        <div className="bg-red-50 rounded-xl p-6 text-center">
                          <Play className="mx-auto mb-2 text-red-600" size={32} />
                          <p className="text-red-800 font-medium">YouTube Documentary</p>
                          <p className="text-red-600 text-sm">Watch behind-the-scenes footage</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Project Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {project.description} This comprehensive documentation project involved multiple recording sessions, 
                      interviews with local musicians, and extensive research into the historical context of the musical traditions. 
                      Our team worked closely with community leaders and cultural experts to ensure authentic representation 
                      of these important musical heritage elements.
                    </p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;