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

import axios from "axios"
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react";


const PokedexPage = () => {


    const context = useContext(GlobalContext)
    const { pokedex, removeFromPokedex } = context;



    {
        pokedex.map((pokemon) => (
            console.log("pokederx url", pokemon.id)
        ))
    }

    return (


        <div>
            <Header isOnPokedexPage={true} />
            Hi! I'm PokedexPage


            {pokedex.map((pokemon) => (
                <PokemonCard
                    key={pokemon.name}
                    pokemonUrl={BASE_URL.concat(pokemon.id)}
                />
            ))}

        </div>
    )
}

export default PokedexPage