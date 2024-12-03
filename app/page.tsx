"use client"

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const HomePage = () => {
  const router = useRouter();

  useEffect(() => {
    // Condição para redirecionar
    if (true) { // Troque 'true' pela sua condição
      router.push('/home');
    }
  }, [router]);

  return (
    <div>
    </div>
  );
};

export default HomePage;
