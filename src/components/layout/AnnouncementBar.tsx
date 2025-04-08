
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const announcements = [
  "Get 15% off for PrePaid Orders for Orders above 2000",
  "Free shipping on orders over $100",
  "New collection drop: Urban Streetwear",
  "Sign up for our newsletter and get 10% off your first order"
];

export const AnnouncementBar = () => {
  const [currentAnnouncement, setCurrentAnnouncement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentAnnouncement((prev) => (prev - 1 + announcements.length) % announcements.length);
  };

  const handleNext = () => {
    setCurrentAnnouncement((prev) => (prev + 1) % announcements.length);
  };

  return (
    <div className="bg-noisy-black text-white py-3 px-4 flex items-center justify-between">
      <button onClick={handlePrev} className="text-white p-1">
        <ChevronLeft size={16} />
      </button>
      <div className="text-center text-sm font-medium">
        {announcements[currentAnnouncement]}
      </div>
      <button onClick={handleNext} className="text-white p-1">
        <ChevronRight size={16} />
      </button>
    </div>
  );
};
