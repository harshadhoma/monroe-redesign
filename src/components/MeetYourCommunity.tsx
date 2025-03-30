// /src/pages/MeetYourCommunity.tsx
import React, { useState } from 'react';
import { Header } from '../components/Navigation/HeaderComponent';
import { CommunityMemberModal } from '../components/CommunityMemberModel';

const people = [
    {
      name: 'Sarah Thompson',
      title: '4-H Youth Leader',
      image: 'https://media.istockphoto.com/id/1340045749/photo/close-up-portrait-of-caucasian-woman.jpg?s=612x612&w=0&k=20&c=nGl9ZEJzY2h1B_Ohlof2fnOQROIfq-CboPhVBLqtd3s=',
      fullBio: 'Sarah has mentored dozens of young 4-H participants, encouraging their love for agriculture and animals.',
      description: 'Sarah helps kids connect with nature and farming through year-round education programs and hands-on activities.',
      contributions: ['Organized Annual 4-H Animal Show', 'Youth Farm Education Program', 'Sustainable Gardening Club']
    },
    {
      name: 'David Martinez',
      title: 'Local Food Vendor',
      image: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg',
      fullBio: 'David has been serving his signature dishes at the fair for over a decade, becoming a local favorite.',
      description: 'From tacos to funnel cakes, David’s food truck is a must-visit every fair season.',
      contributions: ['12 Years of Food Service at the Fair', 'Top-Voted Vendor 2023', 'Community Cooking Demos']
    },
    {
      name: 'Emily Zhang',
      title: 'Fair Volunteer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400',
      fullBio: 'Emily is a passionate volunteer who brings joy and energy to every event she helps with.',
      description: 'She coordinates logistics and visitor support, always with a smile.',
      contributions: ['Event Day Logistics Lead', 'Volunteer Welcome Committee', 'Kids Zone Organizer']
    },
    {
      name: 'Michael O’Connor',
      title: 'Tractor Show Organizer',
      image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=400',
      fullBio: 'Michael ensures the tradition of the summer tractor show continues to thrive year after year.',
      description: 'He works with local collectors and farmers to create an unforgettable experience for all ages.',
      contributions: ['Vintage Tractor Parade', 'Mechanic Workshop Demo', 'Historic Farming Exhibit']
    },
    {
      name: 'Anita Desai',
      title: 'Craft Booth Artist',
      image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=400',
      fullBio: 'Anita has been sharing her handmade jewelry and art at the fair for over 8 years.',
      description: 'Her booth is known for colorful, intricate designs and welcoming conversations.',
      contributions: ['Handmade Jewelry Booth', 'DIY Craft Workshops', 'Youth Art Mentorship']
    },
    {
      name: 'Carlos Rivera',
      title: 'Security Volunteer',
      image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400',
      fullBio: 'Carlos is one of the longest-serving security volunteers, keeping things safe and friendly.',
      description: 'He helps manage crowds, provides assistance to guests, and supports the entire team behind the scenes.',
      contributions: ['Fairground Safety Patrol', 'Emergency Drill Coordinator', 'Visitor Support Services']
    }
  ];  

export default function MeetYourCommunity() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (person: any) => {
    setSelectedPerson(person);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-purple-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-purple-800 mb-6 text-center">
          Meet Your Community 💜
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Get to know the people making a difference in Monroe County!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {people.map((person, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(person)}
              className="bg-white rounded-lg shadow hover:shadow-xl cursor-pointer transition duration-300"
            >
              <img src={person.image} alt={person.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-purple-800">{person.name}</h2>
                <p className="text-sm text-gray-600">{person.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <CommunityMemberModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        person={selectedPerson}
      />
    </div>
  );
}
