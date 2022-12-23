

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
import { Box, Link } from "@chakra-ui/react";
import { goToPokemonDetailPage } from "../../Router/coordinator";
import { useNavigate } from 'react-router-dom';



export const PokemonCard = (props) => {
    const { pokemon } = props
    const [pokemonsTypes, setPokemonsTypes] = useState([])
    const navigate = useNavigate()
    const idSplitUrl = pokemon.url.split("/")
    let idPokemon = idSplitUrl[idSplitUrl.length - 2]

    const IMAGE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPokemon}.png`


    const fetchPokemonType = () => {
        axios.get(`${BASE_URL}api/v2/pokemon/${idPokemon}`)
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

    let cardColor = getColors(pokemonsTypes[0]?.type?.name)

    return (
        <Container color={cardColor} >
            <div>
                <PokemonNumber>  #{idPokemon}</PokemonNumber>
                <PokemonName>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</PokemonName>

                <TypesContainer>
                    {pokemonsTypes.map((pokemonType, index) => {
                        return <PokemonType key={index} src={getTypes(pokemonType.type.name)} />;
                    })}
                </TypesContainer>
                
                    <Link onClick={() => goToPokemonDetailPage(navigate, idPokemon)}>Detalhes</Link>
                
            </div>

            <div>
                <Pokemon src={IMAGE} />
                <CatchButton >Capturar!</CatchButton>
            </div>

            <Pokeball src={pokelogo} alt="pokeball" />
        </Container>



    );
}