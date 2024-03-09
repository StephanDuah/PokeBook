"use client";
import React, { useEffect, useState } from "react";
import BackDrop from "./BackDrop";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import DetailTabs from "./DetailsTabs";
import { getPokemon } from "@/lib/PokeActions";
import { useDetailViews } from "@/app/Contexts/DetailViewContext";
import DominantColor from "./DominantColor";
import { DetailsViewProps, PokemonData } from "@/lib/@/types";

const DetailsView = ({ visible, handleClose }: DetailsViewProps) => {
  const [pokemonData, setPokemonData] = useState<PokemonData | null>(null);
  const { id } = useDetailViews();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pokemon = await getPokemon(id);
        setPokemonData(pokemon);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
        setPokemonData(null); // Reset data on error
      }
    };

    if (visible && id) {
      fetchData();
    }
  }, [visible, id]);

  const dropInAnimation = {
    hidden: { x: "100vh", opacity: 0 },
    visible: { x: "0", opacity: 1, transition: { duration: 0.4 } },
    exit: { y: "100vh", opacity: 0 },
  };

  const renderPokemonDetails = () => {
    if (!pokemonData) {
      return <div>Loading...</div>;
    }

    return (
      <div className="p-4 h-screen max-w-full lg:max-w-[40rem] bg-white flex flex-col justify-between overflow-y-scroll">
        <div className="flex flex-col gap-[5rem]">
          <DominantColor imageUrl={pokemonData.image}>
            <div
              onClick={handleClose}
              className="h-[3rem] w-[3rem] bg-white shadow-xl rounded-lg flex items-center justify-center cursor-pointer"
            >
              <ArrowLeft className="text-black h-3 w-3" />
            </div>
            <div className="flex justify-center">
              <Image
                src={pokemonData.image}
                alt={pokemonData.name}
                width={40}
                height={40}
                className="relative h-[20rem] w-[20rem] top-10 "
              />
            </div>
          </DominantColor>
          <div className="text-center">
            <h1 className="heading1">{pokemonData.name}</h1>
          </div>
        </div>
        <DetailTabs pokemon={pokemonData} />
      </div>
    );
  };

  return (
    visible && (
      <BackDrop handleClose={handleClose}>
        <motion.section
          variants={dropInAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={(e) => e.stopPropagation()}
          className=""
        >
          {renderPokemonDetails()}
        </motion.section>
      </BackDrop>
    )
  );
};

export default DetailsView;
