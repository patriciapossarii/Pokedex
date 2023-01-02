import Header from "../../Components/Header/Header"
import { PokemonCard } from "../../Components/PokemonCard/PokemonCard"
import { BASE_URL } from "../../constants/url"
import { Flex } from "@chakra-ui/react"
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react";
import { ModalPage } from "../../Components/Modal/modal";



const PokedexPage = () => {
    const context = useContext(GlobalContext)
    const { pokedex, removeFromPokedex, isOpen, isOpenDel} = context;

    return (
        <div>
           <Header isOnPokedexPage={true} />
            Hi! I'm PokedexPage
            <Flex display={"flex"} alignItems="flex-start" gap={"20px"} wrap={"wrap"}
                bg={"#5E5E5E"}>

                {pokedex.map((pokemon) => (
                   
                    <PokemonCard
                        key={pokemon.name}
                        pokemonUrl={BASE_URL.concat(pokemon.id)}
                        removeFromPokedex={removeFromPokedex}
                    /> 
                   
                ))}
            </Flex>
            {isOpenDel ? <ModalPage></ModalPage> : <></>}
        
        </div>
    )
}

export default PokedexPage