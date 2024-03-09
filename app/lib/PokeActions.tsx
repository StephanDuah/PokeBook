'use server'

////
interface PokemonResult {
  name: string
  url: string
}

interface PokemonData {
  count: number
  next: string | null
  previous: string | null
  results: PokemonResult[]
}

export const getPokemonData = async(limit=10, offset = 0) => {
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
  const pokemonData: PokemonData = await data.json()
  const pokemonUrls = pokemonData.results.map(data => data.url)
  return {totalItems: pokemonData.count, pokemonUrls}
}


export const getPokemons2 = async (urls: string[]) => {
  const pokemons2 = await Promise.all(urls.map(async url => {
      const data = await fetch(url)
      const {id,abilities,name,height,weight,sprites} = await data.json()
      const image = sprites.other.dream_world.front_default
      return {id,abilities,name,height,weight,image}
    }))
    return pokemons2
}

// export const getPokemons = async () => {
    

//     let pokemons = []
//      for(var i = 1; i <= 500; i++){
//        const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//        const {id,abilities,name,height,weight,sprites} = await data.json()
//        const image = sprites.other.dream_world.front_default
//        pokemons.push({id,abilities,name,height,weight,image})
//      }
  
//      console.log(pokemons)
//      return pokemons
        
// } 

export const getPokemon = async (id:any) => {
 
  const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const {abilities,name,height,weight,sprites,stats} = await data.json()
  const image = sprites.other.dream_world.front_default
  const statData = getStats(stats)
  console.log(statData)
  return {id,abilities,name,height,weight,image,stats:statData}
}

const getStats = (statsData: { base_stat: number; stat: {name: string} }[]): { points: number; name: string }[] => {
  // Use map to transform the array
  const newStatsFormat = statsData.map(stat => ({
    points: stat.base_stat,
    name: stat.stat.name
  }));

  return newStatsFormat;
};

