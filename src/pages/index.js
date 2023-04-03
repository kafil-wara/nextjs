import Head from "next/head";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import { Carousel } from "react-responsive-carousel";
import CarouselComponent from "./components/Carousel";
//import { Body } from "@nestjs/common";
//import { Body } from "@nestjs/common";
//import 'cache-manager';
//import CarouselComponent from "./components/Carousel";


export default function Home() {
  return (
    <>
    <Head> 
      <title>Home</title>
      <table>
        <tr>
          <td><a href="#"><img src="images/resize.png"></img></a></td>
          <td><a href="#">Home</a></td>
          <td><a href="#">TV Shows</a></td>
          <td><a href="#">Movies</a></td>
          <td><a href="/allUser">All User</a></td>
          <td><Link href="/login">Login</Link></td>
        </tr>
        <tr>
          <td><SearchBar /> </td>
          <td><a href="#">Subscribe</a></td>
        </tr>
      </table>
      <hr></hr>
      
    </Head>

    <main>
      <h2>New Releases</h2>
      <CarouselComponent />

      <h2>Popular</h2>
      <CarouselComponent />
    </main>
    </>
    
    
    
    
    
  )
}