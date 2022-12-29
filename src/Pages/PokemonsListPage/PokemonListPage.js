import Header from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { BASE_URL } from "../../constants/url"
import { useState, useEffect } from "react"
import {
    Flex,
    Heading,
    Text,
    Box
} from "@chakra-ui/react"
import { useContext } from "react";
import axios from "axios"
import { GlobalContext } from "../../contexts/GlobalContext"
import { addScaleCorrector } from "framer-motion"


const PokemonListPage = () => {

    const context = useContext(GlobalContext)
    const { pokelist, addToPokedex, pokedex, setIdPokemon, idPokemon } = context; //desestrutura o GlobalContent o que desejo usar
  
    // não mostrar pokemons que estão na pokedex
    const filteredPokelist = () =>
      pokelist.filter((pokemonInList) =>
          !pokedex.find((pokemonInPokedex) => 
          pokemonInList.name === pokemonInPokedex.name
          )
      );
    
    return (
        <div>
            <Header
                isOnPokemonListPage={true} />
            Hi! I'm PokemonListPage
            <Flex display={"flex"} alignItems="flex-start" gap={"20px"} wrap={"wrap"}
            bg={"#5E5E5E"}>
              {filteredPokelist().map((pokemon) => (
                                 <PokemonCard 
                                 
                                    key={pokemon.url}
                                    
                    pokemonUrl={pokemon.url}
                    addToPokedex={addToPokedex}
                  />)
                  )}
            </Flex>
        </div>
    )
}

export default PokemonListPage