import Header from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import {
    Flex,
   
} from "@chakra-ui/react"
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext"



const PokemonListPage = () => {

    const context = useContext(GlobalContext)
    const { pokelist, addToPokedex, pokedex } = context;


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
                height={"96vh"}
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