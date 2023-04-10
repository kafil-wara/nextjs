import Head from 'next/head'
import SearchBar from './SearchBar'
import Link from 'next/link'

export default function Header(props) {
    return(
        <>
        <Head>
            <title>{props.title}</title>
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
        </>
    )
}

