import React, { useEffect, useState } from 'react';
import Header from './components/header';
import CarouselComponent from './components/Carousel';
import SessionCheck from './components/sessionCheck';

const Home = () => {
  return (
    <>
    <SessionCheck />
    <Header title="Home" />
    

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
