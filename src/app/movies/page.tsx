'use client'

import { useState } from "react";
import { Program } from '@/types';
import data from '@/data.json';

const MoviesPage = () => {
    const [movies, setMovies] = useState<Program[]>(
        data.entries.filter(program => program.programType === 'movie')
    );
    
  return (
    <section
        className='px-40 py-20 bg-gray-200'
    >
        <h2
            className='text-2xl text-neutral-800 text-center font-bold mb-4'
        >
            Movies
        </h2>
        <div className='grid grid-cols-5 gap-4'>
            {
            movies.map(movie => (
                <div key={movie.title}>
                <img
                    src={movie.images['Poster Art'].url}
                    alt={movie.title}
                    className='h-40 w-40 object-cover'
                />
                <h3
                    className='text-neutral-800'
                >
                    {movie.title}
                </h3>
                </div>
            ))
            }
        </div>
    </section>
  )
}

export default MoviesPage;