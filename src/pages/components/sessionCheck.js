import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function SessionCheck () {
  const router = useRouter();

  useEffect(() => {
    const session = sessionStorage.getItem('email');
    if (!session) {
      router.push('/login');
    }
  }, []);

  const sessionString = sessionStorage.getItem('email'); // Retrieve the string value from sessionStorage

if (sessionString) {
  const sessionObject = JSON.parse(sessionString); // Parse the string back to an object
  console.log(sessionObject.email); // Access the email property of the session object
} else {
  console.log('No email stored in sessionStorage.');
}


  return null;
};