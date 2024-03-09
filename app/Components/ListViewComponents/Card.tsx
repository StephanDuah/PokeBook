'use client'
import Image from 'next/image';
import { EyeIcon } from '@heroicons/react/24/solid';
import { useDetailViews } from '@/app/Contexts/DetailViewContext';
import { motion } from 'framer-motion';
import { useState } from 'react';

type PokemonCardProps = {
  pokemon: {
    id:number
    name: string;
    image: string;
    weight: string;
    height: string
  };
};

const Card = ({ pokemon }: PokemonCardProps) => {
  const { openDetailView } = useDetailViews();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className='group w-full h-[] bg-white p-4 flex-col flex justify-center items-center relative rounded-xl cursor-pointer'
      initial={{ height: '283px' }}
      whileHover={{ height: '379px' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <Image src={pokemon.image} className='absolute -top-10 h-[191px] w-[191px] ' alt={pokemon.image} width={191} height={191} priority /> 
                <div className='w-full h-[148px] bg-gray-300 rounded-xl'>
                </div>
      <div className='w-full h-128 flex flex-col items-center p-6'>
        <h1 className='font-clash text-2xl font-semibold'>{pokemon.name}</h1>
      </div>
      <motion.div
        onClick={() => openDetailView(pokemon.id)}
        className={`${
          isHovered ? 'flex' : 'hidden'
        } group-hover:flex  items-center bg-primary justify-between opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition duration-200 w-full rounded-xl p-4 text-white cursor-pointer`}
        initial={{ opacity: 0, translateY: 8 }}
        animate={{ opacity: isHovered ? 1 : 0, translateY: isHovered ? 0 : 8 }}
      >
        <h4>View Pokemon</h4>
        <EyeIcon className='h-4 w-4 text-white' />
      </motion.div>
    </motion.div>
  );
};

export default Card;