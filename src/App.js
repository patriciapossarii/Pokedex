import Router from "./Router/Router";
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContext } from "./contexts/GlobalContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "./constants/url";

export default function App() {
  const [pokelist, setPokelist] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [idPokemon, setIdPokemon] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenDel, setIsOpenDel] = useState(false)
  

  useEffect(() => {
    fetchPokelist();
  }, []);


  const fetchPokelist = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?limit=20`)
      setPokelist(response.data.results)
    } catch (error) {
      console.log("Erro ao buscar lista de pokemons");
      console.log(error.response);
    }
  };


  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );
    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };


  const removeFromPokedex = (pokemonToRemove) => {
      const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );
    setPokedex(newPokedex);
  };


  const context = {
    pokedex,
    pokelist,
    idPokemon,
    isOpen,
    isOpenDel,
    setPokedex,
    setPokelist,
    setIdPokemon,
    setIsOpen,
    setIsOpenDel,
    fetchPokelist,
    addToPokedex,
    removeFromPokedex,
   
  }


  useEffect(() => {
    if (pokedex.length > 0) {
      const pokedexString = JSON.stringify(pokedex)
      localStorage.setItem("pokedex", pokedexString)
    }
  }, [pokedex])


  useEffect(() => {
    const pokedexGet = localStorage.getItem("pokedex")
    if (pokedexGet !== null) {
      const pokedexArray = JSON.parse(pokedexGet)
      setPokedex(pokedexArray)
    }
  }, [])


  return (
    <ChakraProvider resetCSS >
      <GlobalContext.Provider value={context}>
        <Router />
      </GlobalContext.Provider>
    </ChakraProvider>

  );
}


