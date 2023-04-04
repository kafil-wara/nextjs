import Head from "next/head";
import Link from "next/link";
import SearchBar from "./components/SearchBar";
import CarouselComponent from "./components/Carousel";


//make the head a seperate component
export default function Home() {
  return (
    <>
    
    <Head> 
      <title>Home</title>
      <table>
        <tr>
          <td><a href="/"><img src="images/resize.png"></img></a></td>
          <td><a href="/">Home</a></td>
          <td><a href="#">TV Shows</a></td>
          <td><a href="#">Movies</a></td>
          <td><Link href="/login">Login</Link></td>
        </tr>
        <tr>
          <td><SearchBar /> </td>
          <td><a href="signup">Subscribe</a></td>
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