'use client'
import { useState, useEffect } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Technologies } from './components/Technologies';
import { Projects } from './components/projects/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';



export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 3000);
  }, []);



  return (
    <main className='h-auto w-full'>
      {
        isLoading ? (<Loading isLoading={isLoading} />) : (
          <>
            
            <Hero />
            <About />
            <Technologies />
            <Projects />
            <Contact />
            <Footer/>
          </>
        )
      }





    </main>
  );
}

