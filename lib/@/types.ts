// Define types for context values
export interface DetailViewsContextType {
    visibleDetailView: boolean;
    id: number | null;
    openDetailView: (id: number) => void;
    closeDetailView: () => void;
  }


  export type PaginationProp = {
    totalItems: number;
    itemsPerPage: number;
    currentPage: number;
    setCurrentPage: (page: number) => void;
    setOffset: (offset: number) => void;
  }

  export interface DataProps  { id: number; name: string; image: string; weight: string; height: string }

  export interface PokemonData {
    name: string;
  
    abilities: {ability:{name:string}} [];
    weight:string,
    height:string
    image:string,
    stats:{name:string,points:number}[]
  }
  
  export type DetailsViewProps = {
    visible: boolean;
    handleClose: () => void;
  };

  export type DetailTabsProps = {
    pokemon: PokemonData
   }