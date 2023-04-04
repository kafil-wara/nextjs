import Head from 'next/head';
import { getLocalData } from '/src/pages/localdata';
import SearchBar from '/src/pages/components/SearchBar';

export async function getStaticProps() {
    const localData = await getLocalData()
  
    return {
      props: { localData }
    }
  }

  //export async function getStaticProps() {}

  export default function allUser({ localData }) { 
  
  return (
      <>
        <Head>
        <table>
                <tr>
                    <td><a href="#"><img src="images/resize.png"></img></a></td>
                    <td><a href="#">Home</a></td>
                    <td><a href="#">TV Shows</a></td>
                    <td><a href="#">Movies</a></td>
                </tr>
                <tr>
                    <td><SearchBar /> </td>
                    <td><a href="#">Subscribe</a></td>
                </tr>
            </table>
        <hr></hr>  
        </Head>

        
        <section>
            <a href="/adminDashboard">Back</a>
            <h2>User List</h2>
            <ul>
              {localData.map(({ id, name, email }) => (
                <li key={id}>
                  <b>{id} - {name}</b>
  
                  <br />
                  {email}
                </li>
              ))}
            </ul>
          </section>
      </>
    )
  }