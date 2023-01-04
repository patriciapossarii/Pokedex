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


const PokemonListPage = () => {


    const [pokemons, setPokemons] = useState([])




    const fetchAllPokemons = () => {
        axios.get(`${BASE_URL}api/v2/pokemon?limit=20`)
            .then((resp) => {
                console.log("results", resp.data.results)
                setPokemons(resp.data.results)

            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchAllPokemons()

    }, [])



    return (
        <div>
            <Header
                isOnPokemonListPage={true} />
            Hi! I'm PokemonListPage
            <Flex display={"flex"} alignItems="flex-start" gap={"20px"} wrap={"wrap"}
            bg={"#5E5E5E"}>
                {pokemons.map((pokemon, index) => {
                    return <PokemonCard key={index} pokemon={pokemon} />
                })}
            </Flex>
        </div>
    )
}

export default PokemonListPage