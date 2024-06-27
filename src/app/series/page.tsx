'use client'

import { useState } from "react";
import { Program } from '@/types';
import data from '@/data.json';

const SeriesPage = () => {
    const [series, setSeries] = useState<Program[]>(
        data.entries.filter(program => program.programType === 'series')
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
            series.map(serie => (
                <div key={serie.title}>
                <img
                    src={serie.images['Poster Art'].url}
                    alt={serie.title}
                    className='h-40 w-40 object-cover'
                />
                <h3
                    className='text-neutral-800'
                >
                    {serie.title}
                </h3>
                </div>
            ))
            }
        </div>
    </section>
  )
}

export default SeriesPage;