'use client'
import React, { useEffect, useState } from 'react';
import Card from './Card';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { getPokemonData, getPokemons2 } from '@/app/lib/PokeActions';

const CardList = () => {
  const [data, setData] = useState<{ id: number; name: string; image: string; weight: string; height: string }[]>([]);
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const itemsPerPage = 10;
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        setLoading(true)
        setData([])
        const pokemonData = await getPokemonData(itemsPerPage, offset);
        setTotalItems(pokemonData.totalItems);
        const pokemons = await getPokemons2(pokemonData.pokemonUrls);
        setData(pokemons);
      } catch (error) {
        console.error('Error fetching Pokémon data:', error);
        // Handle error
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [itemsPerPage, offset]);

 

  

  return (
    <>
    {loading && <div className='w-full h-screen flex justify-center items-center text-primary text-xl font-semibold'>fetching data...</div>}
      {!loading && (<><section className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-20 max-w-[1440px] mx-auto relative'>
        {data.map((pokemonItem, index) => (
          <Card key={index} pokemon={pokemonItem} />
        ))}
      </section>
      <PaginationSection
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setOffset={setOffset}
      /></>)}
    </>
  );
};

const PaginationSection = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  setOffset,
}: {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  setOffset: (offset: number) => void;
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const numNeighboringPages = 3;
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setOffset((currentPage + 1 - 1) * itemsPerPage);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setOffset((currentPage - 1) * itemsPerPage);
    }
  };

  const handlePageNumber = (page: number) => {
    setCurrentPage(page);
    setOffset((page - 1) * itemsPerPage);
  };

  // Generate an array of page numbers to display
  const pagesToShow = [];
  for (let i = Math.max(1, currentPage - numNeighboringPages); i <= Math.min(pages.length, currentPage + numNeighboringPages); i++) {
    pagesToShow.push(i);
  }

  // Get a list of number Items to show on a page
  const itemIndex = []
  for (let i = 8; i <= 24; i = i + 4){
    itemIndex.push(i)
  }
  return (
    <div className='p-16 w-full flex items-center justify-between'>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              className={`${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/55 hover:text-primary-foreground bg-neutral-200'
              }`}
              onClick={handlePrevPage}
            />
          </PaginationItem>
          {pagesToShow.map((page, idx) => (
          <PaginationItem key={idx} className={`cursor-pointer  ${currentPage === page ? 'bg-primary text-primary-foreground rounded-md ' : 'rounded-md bg-neutral-200'}`}>
            <PaginationLink className='hover:bg-primary/55 hover:text-primary-foreground' onClick={() => handlePageNumber(page)}>{page}</PaginationLink>
          </PaginationItem>
        ))}
        {pages.length > (numNeighboringPages * 2) && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
          <PaginationItem>
            <PaginationNext
              className={`${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/55 hover:text-primary-foreground bg-neutral-200'
              }`}
              onClick={handleNextPage}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CardList;
