import React from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import IconWhite from '../assets/Icon_White.png';

const Events: React.FC = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Gnawa Music Festival Recording',
      date: '2024-05-15',
      time: '19:00',
      venue: 'Jemaa el-Fnaa, Marrakech',
      artists: ['Maalem Hassan Boussou', 'Group Nass El Ghiwane'],
      description: 'Live recording session during the annual Gnawa Music Festival, capturing the spiritual essence of traditional ceremonies.',
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Recording Session'
    },
    {
      id: 2,
      title: 'Andalusian Music Workshop',
      date: '2024-05-28',
      time: '14:00',
      venue: 'Dar Batha Museum, Fès',
      artists: ['Aicha El-Filali', 'Orchestra Al-Brihi'],
      description: 'Educational workshop on classical Andalusian music techniques and traditional maqam systems.',
      image: 'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Workshop'
    },
    {
      id: 3,
      title: 'Atlas Mountains Folk Documentation',
      date: '2024-06-10',
      time: '09:00',
      venue: 'Imlil Valley, High Atlas',
      artists: ['Local Berber Musicians'],
      description: 'Field recording expedition to document traditional Amazigh songs and oral storytelling traditions.',
      image: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'Field Recording'
    }
  ];

  const pastEvents = [
    {
      id: 4,
      title: 'Chaabi Voices of Casablanca',
      date: '2024-03-20',
      venue: 'Casa Memoria, Casablanca',
      summary: 'Successfully recorded intimate performances by three generations of chaabi musicians, documenting the evolution of urban Moroccan folk music.',
      media: ['YouTube Documentary', 'Spotify Album', 'Photo Gallery'],
      image: 'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Rai Fusion Project',
      date: '2024-02-14',
      venue: 'L\'Uzine Cultural Center, Casablanca',
      summary: 'Collaborative recording session between traditional rai musicians and contemporary artists, exploring the genre\'s modern evolution.',
      media: ['Live Stream Recording', 'Behind-the-Scenes Video'],
      image: 'https://images.pexels.com/photos/3771115/pexels-photo-3771115.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Sufi Musical Meditation',
      date: '2024-01-18',
      venue: 'Zawiya Boutchichiyya, Berkane',
      summary: 'Captured the spiritual dimensions of Sufi music practices, including traditional dhikr and sama ceremonies.',
      media: ['Audio Archive', 'Research Paper'],
      image: 'https://images.pexels.com/photos/2577274/pexels-photo-2577274.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'Recording Session':
        return 'bg-morocco-red-100 text-morocco-red-800';
      case 'Workshop':
        return 'bg-morocco-ochre-100 text-morocco-ochre-800';
      case 'Field Recording':
        return 'bg-morocco-blue-100 text-morocco-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="py-8">
      {/* Header */}
      <div className="text-white py-16" style={{ backgroundColor: '#3333ff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-display font-bold mb-4 flex items-center justify-center gap-4">
            <img src={IconWhite} alt="Events Icon" className="h-10 w-10 inline-block" />
            Events
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Join us for recording sessions, workshops, and cultural events celebrating Morocco's musical heritage.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="flex items-center gap-3 text-4xl font-extrabold tracking-wide text-gray-900 mb-8 drop-shadow-sm">
            <span className="inline-block w-2 h-8 rounded bg-[#3333ff] mr-2"></span>
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="relative bg-[#f4debd] rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden animate-fade-in border-l-4 border-[#3333ff]">
                {/* Date Badge Overlay */}
                <div className="absolute top-4 left-4 bg-[#3333ff] text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow">
                  {new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                </div>
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getEventTypeColor(event.type || '')}`}>{event.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center gap-2">{event.title}</h3>
                  {/* Divider */}
                  <div className="border-b border-gray-200 my-3"></div>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2 text-morocco-ochre-600" />
                      {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2 text-morocco-ochre-600" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2 text-morocco-ochre-600" />
                      {event.venue}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2 text-morocco-ochre-600" />
                      {event.artists.join(', ')}
                    </div>
                  </div>
                  <p className="text-gray-700 text-base mb-4 leading-relaxed">{event.description}</p>
                  <div className="flex justify-end">
                    <button className="bg-morocco-red-600 hover:bg-morocco-red-700 text-white font-medium py-2 px-4 rounded-lg transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Past Events Archive */}
        <section>
          <h2 className="flex items-center gap-3 text-4xl font-extrabold tracking-wide text-gray-900 mb-8 drop-shadow-sm">
            <span className="inline-block w-2 h-8 rounded bg-[#3333ff] mr-2"></span>
            Past Events Archive
          </h2>
          <div className="space-y-6">
            {pastEvents.map((event) => (
              <div key={event.id} className="relative bg-[#f4debd] rounded-xl shadow-md hover:shadow-lg transition-shadow p-6 border-l-4 border-gray-400 overflow-hidden animate-fade-in">
                {/* Past Badge */}
                <div className="absolute top-4 left-4 bg-gray-400 text-white px-3 py-1 rounded-full text-xs font-bold z-10 shadow">Past</div>
                <div className="flex flex-col md:flex-row gap-6">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg filter grayscale"
                  />
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 md:mb-0">
                        {event.title}
                      </h3>
                      <div className="text-sm text-gray-500">
                        <div className="flex items-center mb-1">
                          <Calendar size={14} className="mr-1" />
                          {new Date(event.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </div>
                        <div className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {event.venue}
                        </div>
                      </div>
                    </div>
                    {/* Divider */}
                    <div className="border-b border-gray-200 my-3"></div>
                    <p className="text-gray-600 mb-4">{event.summary}</p>
                    <div className="flex flex-wrap gap-2">
                      {event.media.map((mediaType, index) => (
                        <button
                          key={index}
                          className="flex items-center px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-full hover:bg-gray-100 transition-colors"
                        >
                          <ExternalLink size={12} className="mr-1" />
                          {mediaType}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Events;