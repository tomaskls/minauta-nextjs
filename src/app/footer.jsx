import React from 'react';
import Link from 'next/link';

export default function Footer() {
  // Automatiškai gauname dabartinius metus
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="w-full bg-gray-400 p-1 text-center">
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <span>©</span>
        <span>{currentYear}</span>
        <span>created by</span>
        <Link 
          href="https://www.tmh.lt/lt" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 hover:underline"
        >
          TMH.lt
        </Link>
      </div>
    </div>
  );
}