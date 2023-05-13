import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('email');
    //console.log(JSON.stringify(session));
    //console.log(typeof(session));
    //console.log(session)
    if (session == 'admin@bdflix.com') {
      router.push('/adminDashboard');
    }
    else {
      router.push('/login');
    }
  }, []);

  return null;
};