
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    color,
    Flex,
    Button,
    Link,
    Container
} from '@chakra-ui/react';
import axios from "axios"
import { useState, useEffect } from 'react';
import pokelogo from "../../assets/pokeLog.png"
import { BASE_URL } from '../../constants/url';
import { getTypes } from "../../utils/ReturnPokemonType"
import { getColors } from '../../utils/ReturnCardColor';





export const PokemonCard = (props) => {
    const { pokemon } = props
    const [pokemonsTypes, setPokemonsTypes] = useState([])

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



    {
        pokemonsTypes.map((pokemonType, index) => {

            return <Box key={index} cardcolor={getColors(pokemonType.type.name[0])}
            />
        })
    }


    /*let colorCard = getColors(pokemonsTypes[0].type.name)*/
    let colorCard = "green"

    return (
        <Center  >
            <Text position={"absolute"} width={"420px"} height={"72px"} left={"40px"} top={"60px"}
                fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700"} fontSize={"48px"} lineHeight={"72px"} color={"#FFFFFF"}
            >
                Todos Pokémons </Text>


            <Box
                marginTop={"187px"}
                w={'440px'}
                h={'210px'}
                cursor="pointer"
                bg={colorCard}
                boxShadow={'2xl'}
                borderRadius={"12px"}
            >
                <Container display={"flex"}>
                    <Image
                        position={"absolute"}
                        h={"193px"}
                        w={"193px"}
                        marginLeft={"236px"}
                        marginTop={"-53px"}
                        src={IMAGE}

                    />
                    <Image
                    position={"relative"}
                        h={"210.73px"}
                        w={"210.73px"}
                        top={"-62px"}
                        left={"294.37px"}
                        src={pokelogo}
                        
                    />



                </Container>


                <Stack >
                    <Text
                        w={"32px"} h={"19px"} left={"23px"} top={"25px"}
                        fontFamily={"Inter"} fontStyle={"normal"} fontWeight={"700"} fontSize={"16px"} lineHeight={"19px"} color={"#FFFFFF"}>
                        #{idPokemon}
                    </Text>

                    <Text
                        w={"159px"} h={"39px"} left={"23px"} top={"40px"}
                        fontFamily={"Inter"} fontStyle={"normal"} fontWeight={"700"} fontSize={"32px"} lineHeight={"39px"} color={"#FFFFFF"} >
                        {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                    </Text>

                    <Box display={"flex"} flexDirection="row" alignItems={"flex-start"} padding={("5px", "8px")} gap={"17px"}
                        width={"99px"} height={"31px"} left={"23px"} top={"89px"}>
                        {pokemonsTypes.map((pokemonType, index) => {
                            return <Image key={index} src={getTypes(pokemonType.type.name)} />
                        })
                        }
                    </Box>


                    <Link width={"74px"} height={"24px"}
                        fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700px"} fontSize={"16px"} lineHeight={"24px"} textDecorationLine={"underline"}
                        color={"#FFFFFF"} >
                        Detalhes
                    </Link>


                    <Button display={"flex"} flexDirection={"row"} justifyContent={"center"} alignItems={"center"} padding={("4px", "10px")}
                        w={"146px"} h={"38px"} bg={" #FFFFFF"}>
                        Capturar!
                    </Button>

                </Stack>
            </Box>
        </Center>
    );
}