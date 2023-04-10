import { useState } from 'react';
import axios from 'axios';

export async function getServerSideProps() {
    
    const response = await axios.get(`http://localhost:3000/admin/finduserbyname?name=`+results);
    const results = await response.json();
    console.log(results);
    return { props: { results } }
}

export default function SearchUser({ searchTerm }) {
    return (
    <div>
      <input type="text" value={searchTerm}/>
      <button onClick={getServerSideProps}>Search</button>
    </div>
  );
}
