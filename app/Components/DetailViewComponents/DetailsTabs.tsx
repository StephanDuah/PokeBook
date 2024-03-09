import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PokemonData } from './DetailsViewContainer'
type DetailTabsProps = {
 pokemon: PokemonData
}
const DetailTabs = ({pokemon}:DetailTabsProps) => {
    const tabs = ['about','stats','simillar']
  return (
    <Tabs defaultValue="about" className="w-full h-[] flex-1 py-10  flex flex-col justify-between items-center">
   
      {/* About Tab */}
     <TabsContent value="about">  <div className='  space-y-4  border-y'>
      <h2 className='text-2xl text-center font-bold '>About</h2>
      <div className='w-[510px] mx-auto flex flex-col items-center justify-center bg-slate-100/50'>
         <div className='flex items-center gap-20 border-b p-2'>
          <h4 className=' text-lg'>Height</h4>
          <ul className='text-lg font-semibold'><li>{pokemon.height} m</li></ul>
         </div>
         <div className='flex items-center gap-20 border-b p-2'>
          <h4 className='text-lg'>Weight</h4>
          <ul className='text-lg font-semibold'><li>{pokemon.weight} kg</li></ul>
         </div>
         <div className='flex items-start gap-20 border-b p-2'>
          <h4 className=' text-lg'>Abilities</h4>
          <ul className='text-lg font-semibold list-disc'>
          {pokemon.abilities.map((ability,id) => (
            <li key={id}>{ability.ability.name}</li>
          ))}
          </ul>
         </div>
      </div>
      </div>
      </TabsContent>

      {/* stats tab */}
     <TabsContent value="stats">
     <div className='  space-y-2  border-y'>
      <h2 className='text-2xl text-center font-bold '>Stats</h2>
      <div className='w-[510px] mx-auto flex flex-col items-center justify-center bg-slate-100/50'>
       {
        pokemon.stats.map(
          (stat) => (<div key={stat.name} className='flex items-center gap-2 border-b '>
         <div className='w-[200px] text-center'> <h4 className=' text-lg'>{stat.name}</h4> </div>
          <div className='flex items-center gap-2'>
              
             {/* This block of code */}
            <div className='w-[189px] h-2 bg-gray-600'>
              <div className={`h-2 bg-primary`} style={
                {width: stat.points}
              }>
              </div>
            </div>
            <h4 className='text-lg font-semibold'>{stat.points}</h4>
          </div>
         </div>)
        )
       }
         
       
        
      </div>
      </div>
     </TabsContent>
    {/* similar tab */}
     <TabsContent value="simillar">Change your password here.</TabsContent>

     <TabsList className='py-8 rounded-full bg-gray-200 px-2 shadow-inner'>
     <TabsTrigger className='py-[12px] px-[40px] rounded-full  drop-shadow-md' value="about">
       about
     </TabsTrigger>
     <TabsTrigger className='py-[12px] px-[40px] rounded-full  drop-shadow-md' value="stats">stats</TabsTrigger>
     <TabsTrigger className='py-[12px] px-[40px] rounded-full  drop-shadow-md' value="simillar">Simillar</TabsTrigger>
     </TabsList>

  </Tabs>
  )
}

export default DetailTabs