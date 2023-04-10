import Head from "next/head";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import CarouselComponent from "./components/Carousel";
import Layout from "./components/layout";
import Header from "./components/header";


//make the head a seperate component
export default function Home() {
  return (
    <>
    <Header title="Home"/>

    <main>
      <h2>New Releases</h2>
      <CarouselComponent />

      <h2>Popular</h2>
      <CarouselComponent />
    </main>
    </>
  )
}