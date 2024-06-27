'use client'
import Link from 'next/link';
import { Program } from '@/types';
import data from '@/data.json';
import { Suspense, useState } from 'react';

const Home = () => {
  const [programs, setPrograms] = useState<Program[]>(data.entries);
  const newsPrograms = programs.filter(program => program.releaseYear >= 2010).slice(0, 21);
  const orderedPrograms = newsPrograms.sort((a, b) => a.title.localeCompare(b.title));


  return (
    <main>
      <section 
        className='flex justify-between flex-wrap px-40 py-20 bg-gray-200'
      >
        <div
          className='flex flex-col items-center'
        >
          <h2
            className='text-2xl text-neutral-800 mb-4 font-bold'
          >
            Movies and Series
          </h2>
            <div
              className='grid grid-cols-5 gap-4'
              >
              {
                orderedPrograms.map(program => (
                  <div
                    key={program.title}
                    className='flex flex-col items-center'
                    >
                    <img
                      src={program.images['Poster Art'].url}
                      alt={program.title}
                      className='h-40 w-40 object-cover'
                      />
                    <h3
                      className='text-neutral-800'
                      >
                      {program.title}
                    </h3>
                  </div>
                ))
              }
            </div>
        </div>
      </section>
    </main>
  )
}

export default Home;