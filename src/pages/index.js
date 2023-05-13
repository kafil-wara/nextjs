import React, { useEffect, useState } from 'react';
import Header from './components/header';
import CarouselComponent from './components/Carousel';
import SessionCheck from './components/sessionCheck';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import SearchBar from './components/SearchBar';
import Session from './components/session';


const Home = () => {
  return (
    <>
    <Session />

                <div className='border-b-2 bg-slate-100'>
                    <title>Home</title>
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center">
                            <Link href="/">
                                <Image src="/images/resize.png" alt="Logo" width={200} height={200}/>
                            </Link>
                            <Link href="/" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">Home</Link>
                            <Link href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">TV Shows</Link>
                            <Link href="#" className="ml-4 text-lg font-bold text-gray-800 hover:text-gray-600">Movies</Link>
                        </div>
                        
                        <div className="flex items-center">
                            <SearchBar />
                            <Link href="logout" className="ml-4 px-4 py-2 rounded-full bg-red-500 text-white text-lg font-bold hover:bg-red-600">Logout</Link>
                        </div>
                    </div>
                </div>
    

    <main
      className=" mx-auto px-4 bg-slate-200"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">New Releases</h2>
      <CarouselComponent />

      <h2 className="text-2xl font-bold my-4 text-center">Popular</h2>
      <CarouselComponent />
    </main>
    </>
  );
};

export default Home;
