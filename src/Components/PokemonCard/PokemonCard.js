
import axios from "axios"
import { useState, useEffect } from 'react';
import pokelogo from "../../assets/pokeLog.png"
import { BASE_URL } from '../../constants/url';
import { getTypes } from "../../utils/ReturnPokemonType"
import { getColors } from '../../utils/ReturnCardColor';
import { PokemonName } from './PokemonCard-Styled';
import {
    Container, PokemonNumber, TypesContainer, PokemonType, Pokemon,
    CatchButton, Pokeball
} from "./PokemonCard-Styled";
import { Box, Link, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader } from "@chakra-ui/react";
import { goToPokemonDetailPage } from "../../Router/coordinator";

import { useDisclosure } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";



export const PokemonCard = (props) => {
    const { pokemonUrl, addToPokedex, removeFromPokedex,  pokelist, setIdPokemon } = props;
    const location = useLocation();
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState({});

    const [pokemonsTypes, setPokemonsTypes] = useState([])

    let url = pokemonUrl
    if(url.endsWith("/")){
        url = url.substring(0, url.length-1)
    }

    useEffect(() => {
        fetchPokemon();
    }, []);


    const fetchPokemon = async () => {
        try {
            const response = await axios.get(url);
            setPokemon(response.data);
            //etIdPokemon(response.data.id)
        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error);
        }
    };



   const idSplitUrl = url?.split("/")

    let idPokemon = idSplitUrl[idSplitUrl.length - 1]
  
    //console.log("pokeu",pokemonUrl?.split("/"))
  


    const fetchPokemonType = () => {
        axios.get(BASE_URL.concat(idPokemon))
            .then((resp) => {
                setPokemonsTypes(resp.data.types)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        fetchPokemonType()
    }, [])

    //let cardColor = getColors(pokemonsTypes[0]?.type?.name)

    const { isOpen, onOpen, onClose } = useDisclosure()

//console.log("ID pokemon", idPokemon)
    
    return (
        <Container color={getColors(pokemonsTypes[0]?.type?.name)} >
            <div>
                <PokemonNumber>  #{idPokemon}</PokemonNumber>
                <PokemonName>{pokemon?.name?.charAt(0).toUpperCase() + pokemon?.name?.slice(1)}</PokemonName>

                <TypesContainer>
                    {pokemonsTypes.map((pokemonType, index) => {
                        return <PokemonType key={index} src={getTypes(pokemonType.type.name)} />;
                    })}
                </TypesContainer>

                <Link onClick={() => goToPokemonDetailPage(navigate, idPokemon)}>Detalhes</Link>

            </div>

            <div>
                <Pokemon src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPokemon}.png`} />

                {location.pathname === "/" ? (
                    <CatchButton onClick={() => addToPokedex(pokemon)}>
                        Capturar!
                    </CatchButton>
                ) : (
                    <button onClick={() => removeFromPokedex(pokemon)}>
                        Remover da Pokedex
                    </button>
                )}


                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent width={"451px"} height={"222px"}>
                        <ModalHeader
                            position={"absolute"} width={"219.16px"} height={"72px"} left={"123px"} top={"61px"}
                            fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700"}
                            fontSize={"48px"} lineHeight={"72px"}>Gotcha!</ModalHeader>

                        <ModalBody
                            position={"absolute"} width={"337px"} height={"24px"} left={"64px"} top={"133px"}
                            fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700"}
                            fontSize={"16px"} lineHeight={"24px"}>
                            O Pokémon foi adicionado a sua Pokédex
                        </ModalBody>


                    </ModalContent>
                </Modal>
            </div>

            <Pokeball src={pokelogo} alt="pokeball" />
        </Container>



    );
}