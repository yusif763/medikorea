'use client'
import React, { useState, useEffect } from 'react';

const mockDoctors = [
  {
    id: 1,
    name: 'John',
    surname: 'Doe',
    branch: 'Cardiology',
    city: 'Seoul',
    image: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Jane',
    surname: 'Smith',
    branch: 'Dermatology',
    city: 'Busan',
    image: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Alice',
    surname: 'Johnson',
    branch: 'Neurology',
    city: 'Incheon',
    image: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  // Add 21 more mock doctors
  ...Array.from({ length: 21 }, (_, i) => ({
    id: i + 4,
    name: `Doctor${i + 4}`,
    surname: `Surname${i + 4}`,
    branch: ['Cardiology', 'Dermatology', 'Neurology', 'Pediatrics', 'Orthopedics'][i % 5],
    city: ['Seoul', 'Busan', 'Incheon', 'Daegu', 'Daejeon'][i % 5],
    image: 'https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  })),
];

const DoctorsPage = () => {
  const [doctors, setDoctors] = useState<any[]>([]);
  const [filters, setFilters] = useState({ name: '', branch: '', city: '' });

  useEffect(() => {
    // Use mock data instead of fetching from an API
    setDoctors(mockDoctors);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const filteredDoctors = doctors.filter((doctor) => {
    const matchesName = `${doctor.name} ${doctor.surname}`.toLowerCase().includes(filters.name.toLowerCase());
    const matchesBranch = doctor.branch.toLowerCase().includes(filters.branch.toLowerCase());
    const matchesCity = doctor.city.toLowerCase().includes(filters.city.toLowerCase());
    return matchesName && matchesBranch && matchesCity;
  });

  return (
    <div className="container mx-auto p-4">
      {/* Search Filters */}
      <div className="filters bg-gray-100 p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold mb-4">Search Filters</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Search by Name or Surname"
            value={filters.name}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            name="branch"
            placeholder="Search by Branch"
            value={filters.branch}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
          <input
            type="text"
            name="city"
            placeholder="Search by City"
            value={filters.city}
            onChange={handleInputChange}
            className="p-2 border rounded-md"
          />
        </div>
      </div>

      {/* Doctors Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <div
            key={doctor.id}
            className="doctor-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <img
              src={doctor.image}
              alt={`${doctor.name} ${doctor.surname}`}
              className="w-full h-72 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{`${doctor.name} ${doctor.surname}`}</h3>
              <p className="text-gray-600">{doctor.branch}</p>
              <p className="text-gray-500">{doctor.city}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsPage;
