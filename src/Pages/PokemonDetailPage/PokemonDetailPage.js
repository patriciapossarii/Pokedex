import Header from "../../Components/Header/Header"
import {
    Pokeball, Container, ContPokemonFront, Containerpokes,
    ImgPokemonFront, ContPokemonBack, ContainerStats, ContainerMoves,
    ContainerPrincipal, TextPoke, PokemonNumber, PokemonName, PokemonType, TypesContainer, Pokemon
} from "./PokemonDetailPage-Styled"
import { BASE_URL } from "../../constants/url"
import { useState, useEffect } from "react"
import axios from "axios"
import { getColors } from "../../utils/ReturnCardColor"
import { goToPokemonDetailPage } from "../../Router/coordinator"
import { useParams } from "react-router-dom"
import pokelogo from "../../assets/pokeLogDetails.svg"
import { Flex, Box, Progress, Stack, Text, Heading, Divider } from "@chakra-ui/react"
import { getTypes } from "../../utils/ReturnPokemonType"


const PokemonDetailPage = () => {
    const [pokemonsTypes, setPokemonsTypes] = useState([])
    const { idPokemon } = useParams()
    const [pokemonsStats, setPokemonsStats] = useState([])
    const [pokemonsMoves, setPokemonsMoves] = useState([])




    const IMAGE = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPokemon}.png`

    const imagePokemonBack = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${idPokemon}.png`

    const imagePokemonFront = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${idPokemon}.png`


    const fetchPokemonType = () => {
        axios.get(`${BASE_URL}api/v2/pokemon/${idPokemon}`)
            .then((resp) => {
                setPokemonsTypes(resp.data.types)
                setPokemonsStats(resp.data.stats)

                setPokemonsMoves(resp.data.moves)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    //console.log("Movimentos", pokemonsMoves[1]?.move?.name.replace(/-/, " ").charAt(0).toUpperCase() + pokemonsMoves[1]?.move?.name.replace(/-/, " ").slice(1).split(' ').join(' '))
    //console.log("nome atake", pokemonsStats[1].stat.name ,"valor atak", pokemonsStats[0].base_stat)


    let moviments = []
    function capitalize(moviment) {
        if (moviment == undefined) {
            return ""
        }
        let sp = moviment.split("-")
        for (var i in sp) {
            sp[i] = sp[i].charAt(0).toUpperCase() + sp[i].slice(1)

        }
        return sp.join(" ")
    }


    for (let i = 0; i < 4; i++) {
        moviments.push(capitalize(pokemonsMoves[i]?.move?.name))
    }


    let sumStats = 0
    for (var i in pokemonsStats) {
        sumStats += pokemonsStats[i].base_stat
    }


    useEffect(() => {
        fetchPokemonType()
    }, [])

    let cardColor = getColors(pokemonsTypes[0]?.type?.name)





    return (


        <div>
            <Header
                isOnPokemonDetailPage={true} />
            <Flex bgImg={pokelogo} bg={"#5E5E5E"} bgPosition={"bottom"}
                minH={"1174px"}
                display={"flex"} alignItems={"center"} justifyContent={"center"}>
                <TextPoke>Detalhes</TextPoke>

                <Flex display={"flex"} minW={"1389.14px"}
                    minH={"663px"} maxH={"663px"}
                    marginTop={"188px"} marginLeft={"25px"} borderRadius={"37.8857px"}
                    bg={cardColor}

                >


                    <Flex display={"flex"} direction={"column"} gap={"40px"} wrap={"wrap"} padding={"17px"}
                        marginLeft={"44px"} marginTop={"23px"}>
                        <Box bg={"white"} borderRadius={"8px"}>
                            <ImgPokemonFront src={imagePokemonFront} />
                        </Box>

                        <Box bg={"white"} borderRadius={"8px"}>
                            <ImgPokemonFront src={imagePokemonBack} />
                        </Box>
                    </Flex>


                    <Box
                        padding={"10px"}
                        w={"343px"} h={"613px"} bg={"white"} marginTop={"34px"} borderRadius={"12px"} marginLeft={"34px"}>
                        <Text fontFamily={"Inter"} fontStyle={"normal"} fontSize={"24px"} lineHeight={"29px"}>Base stats</Text>

                        <Flex display={"flex"} direction={"row"} marginTop={"45px"} >
                            <Stack w={"70px"} spacing={4}>
                                <p size='lg'>HP</p>
                                <p size='lg'>Attack</p>
                                <p size='lg'>Defese</p>
                                <p size='lg'>Sp. Atk</p>
                                <p>Sp. Def</p>
                                <p>Speed</p>
                                <p> Total </p>
                            </Stack>
                            <Stack w={"45px"} spacing={4}>
                                <p>{pokemonsStats[0]?.base_stat}</p>
                                <p>{pokemonsStats[1]?.base_stat}</p>
                                <p>{pokemonsStats[2]?.base_stat}</p>
                                <p>{pokemonsStats[3]?.base_stat}</p>
                                <p>{pokemonsStats[4]?.base_stat}</p>
                                <p>{pokemonsStats[5]?.base_stat}</p>
                                <p><b>{sumStats}</b></p>
                            </Stack>
                            <Stack spacing={7} w={"170px"} bg={"white"} >
                                <Progress colorScheme={pokemonsStats[0]?.base_stat > 50 ? "yellow" : "orange"} value={pokemonsStats[0]?.base_stat} borderRadius={"4px"} bg={"white"} />
                                <Progress colorScheme={pokemonsStats[1]?.base_stat > 50 ? "yellow" : "orange"} value={pokemonsStats[1]?.base_stat} borderRadius={"4px"} bg={"white"} />
                                <Progress colorScheme={pokemonsStats[2]?.base_stat > 50 ? "yellow" : "orange"} value={pokemonsStats[2]?.base_stat} borderRadius={"4px"} bg={"white"} />
                                <Progress colorScheme={pokemonsStats[3]?.base_stat > 50 ? "yellow" : "orange"} value={pokemonsStats[3]?.base_stat} borderRadius={"4px"} bg={"white"} />
                                <Progress colorScheme={pokemonsStats[4]?.base_stat > 50 ? "yellow" : "orange"} value={pokemonsStats[4]?.base_stat} borderRadius={"4px"} bg={"white"} />
                                <Progress colorScheme={pokemonsStats[5]?.base_stat > 50 ? "yellow" : "orange"} value={pokemonsStats[5]?.base_stat} borderRadius={"4px"} bg={"white"} />
                            </Stack>
                        </Flex>
                    </Box >


                    <Flex display={"flex"} direction={"column"} marginLeft={"68px"}>
                        <Box>
                            <PokemonNumber>  #{idPokemon}</PokemonNumber>
                            <PokemonName>Bulbasaur</PokemonName>
                            <TypesContainer>
                                {pokemonsTypes.map((pokemonType, index) => {
                                    return <PokemonType key={index} src={getTypes(pokemonType.type.name)} />;
                                })}
                            </TypesContainer>
                        </Box>


                        <Box w={"292px"} h={"453px"} bg={"#FFFFFF"} marginTop={"7px"} borderRadius={"8px"} >
                            <Text w={"87px"} h={"29px"} marginLeft={"18px"} marginTop={"18px"}
                                fontFamily={"Inter"} fontStyle={"normal"} fontWeight={"800"}
                                fontSize={"24px"} lineHeight={"29px"}> Moves: </Text>

                            <Flex display={"flex"} flexDirection={"column"} alignItems={"flex-start"}
                                padding={"10px"} gap={"20px"}>
                                {moviments.map((moviment) => {
                                    return <Box bg={"#ECECEC"} borderStyle={"dashed"} borderColor={"#dbdbdb"}
                                        borderWidth={"2px"} padding={"10px"} gap={"10px"} borderRadius={"12px"}>{moviment}
                                    </Box>
                                })}
                            </Flex>
                        </Box>


                    </Flex >

                    <Flex >
                        <Pokemon src={IMAGE} />
                    </Flex>


                </Flex>

            </Flex>
        </div>
    )
}

export default PokemonDetailPage