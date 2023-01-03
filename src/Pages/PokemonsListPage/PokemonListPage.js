import Header from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { Flex } from "@chakra-ui/react"
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext"


const PokemonListPage = () => {
    const context = useContext(GlobalContext)
    const { pokelist, addToPokedex, pokedex } = context;

    const filteredPokelist = () =>
        pokelist.filter((pokemonInList) =>
            !pokedex.find((pokemonInPokedex) =>
                pokemonInList.name === pokemonInPokedex.name
            ));

    return (
        <div>
            <Header
                isOnPokemonListPage={true} />
          
            <Flex display={"flex"} 
            alignItems={"center" }
            justifyContent={"center"}
            wrap={"wrap"}
                height={"96%"}
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