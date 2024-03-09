"use client";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import PaginationSection from "./Pagination";

import { getPokemonData, getPokemons2 } from "@/lib/PokeActions";
import { DataProps, PaginationProp } from "@/lib/@/types";
import { useTheme } from "next-themes";
import PageSizeSelection from "./PageSizeSelection";
import Logo from "../Logo";
const CardList = () => {
  const [data, setData] = useState<DataProps[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState<number>(8);
  const [totalItems, setTotalItems] = useState(0);
  const { theme } = useTheme();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setData([]);
        const pokemonData = await getPokemonData(itemsPerPage, offset);
        setTotalItems(pokemonData.totalItems);
        const pokemons = await getPokemons2(pokemonData.pokemonUrls);
        setData(pokemons);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        // Handle error
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [itemsPerPage, offset]);

  return (
    <>
      {loading && (
        <div
          className={`${theme} w-full h-screen flex flex-col p-20 items-center text-primary heading1 gap-10`}
        >
          <Logo />
          <h2 className="text-center">Fetching data...</h2>
        </div>
      )}
      {!loading && (
        <>
          <section
            className={`${theme} w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-20 max-w-[1440px] mx-auto relative`}
          >
            {data.map((pokemonItem, index) => (
              <Card key={index} pokemon={pokemonItem} />
            ))}
          </section>
          <div className="flex items-center p-16">
            <PaginationSection
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              setOffset={setOffset}
            />

            <PageSizeSelection setItemsPerPage={setItemsPerPage} />
          </div>
        </>
      )}
    </>
  );
};

export default CardList;
