import React from 'react';
import { useParams } from 'react-router-dom';

// Demo data
const demoProjects = [
  {
    id: '1',
    title: 'Gnawa Rhythms of the Red City',
    images: [
      'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
      'https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400',
    ],
    description: "Documenting the spiritual and musical traditions of Gnawa masters in Marrakech's medina.",
    artist: {
      name: 'Maalem Hassan Boussou',
      bio: 'A third-generation Gnawa master who has dedicated his life to preserving the sacred rhythms and ceremonies of his ancestors.',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    listen: {
      spotify: 'https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd',
      youtube: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    },
  },
  // Add more demo projects as needed
];

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = demoProjects.find((p) => p.id === id);

  if (!project) return <div className="p-8 text-center">Project not found.</div>;

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div className="flex-1 space-y-4">
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={project.title} className="rounded-xl w-full object-cover" />
          ))}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold mb-2">Artist</h2>
          <div className="flex items-center gap-4 mb-4">
            <img src={project.artist.image} alt={project.artist.name} className="w-16 h-16 rounded-full object-cover" />
            <div>
              <div className="font-bold">{project.artist.name}</div>
              <div className="text-gray-600 text-sm">{project.artist.bio}</div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-2">Description</h2>
          <p className="text-gray-700 mb-4">{project.description}</p>
          <h2 className="text-2xl font-semibold mb-2">Listen & Watch</h2>
          <div className="space-y-4">
            <iframe src={project.listen.spotify} width="100%" height="80" frameBorder="0" allow="encrypted-media" title="Spotify Playlist"></iframe>
            <iframe width="100%" height="200" src={project.listen.youtube} title="YouTube video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails; 