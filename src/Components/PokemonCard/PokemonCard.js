
import axios from "axios"
import { useState, useEffect } from 'react';
import pokelogo from "../../assets/pokeLog.png"
import { BASE_URL } from '../../constants/url';
import { getTypes } from "../../utils/ReturnPokemonType"
import { getColors } from '../../utils/ReturnCardColor';
import { PokemonName } from './PokemonCard-Styled';
import {
    Container, PokemonNumber, TypesContainer, PokemonType, Pokemon,
    CatchButton, Pokeball, RemoveButton
} from "./PokemonCard-Styled";
import {
    Box, Link, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalHeader,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Portal
} from "@chakra-ui/react";
import { goToPokemonDetailPage } from "../../Router/coordinator";

import { Flex } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";


export const PokemonCard = (props) => {
    const { pokemonUrl, addToPokedex, removeFromPokedex } = props;
    const location = useLocation();
    const navigate = useNavigate();
    const [pokemon, setPokemon] = useState({});
    const [pokemonsTypes, setPokemonsTypes] = useState([])

    const context = useContext(GlobalContext)
  
    const {  setIsOpen, setIsOpenDel, } = context;

    let url = pokemonUrl
    if (url.endsWith("/")) {
        url = url.substring(0, url.length - 1)
    }

    useEffect(() => {
        fetchPokemon();
    }, []);


    const fetchPokemon = async () => {
        try {
            const response = await axios.get(url);
            setPokemon(response.data);
  
        } catch (error) {
            console.log("Erro ao buscar lista de pokemons");
            console.log(error);
        }
    };



    const idSplitUrl = url?.split("/")
    let idPokemon = idSplitUrl[idSplitUrl.length - 1]





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




    return (
        <Flex  >
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
                        <CatchButton onClick={() => {
                            addToPokedex(pokemon)
                            setIsOpen(true)
                        }}>
                            Capturar!
                        </CatchButton>
                    ) :

                        (<RemoveButton onClick={() => {
                            removeFromPokedex(pokemon)
                            setIsOpenDel(true)
                            console.log(pokemon)
                        }}>
                            Excluir
                        
                        </RemoveButton>
                        )}



                </div>

                <Pokeball src={pokelogo} alt="pokeball" />
            </Container>
        </Flex>


    );
}