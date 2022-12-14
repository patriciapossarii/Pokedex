import logotipo from "../../assets/logo.svg";
import goBack from "../../assets/buttonGoBack.svg"
import { Image, Box, Flex, Button, Heading, Spacer, ButtonGroup, Link, Divider } from '@chakra-ui/react'
import { goToPokedexPage, goToPokemonsListPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const { isOnPokedexPage, isOnPokemonDetailPage, isOnPokemonListPage } = props
  const navigate = useNavigate()

  return (



    <>
      {isOnPokemonListPage &&
        <Flex alignItems='center' w={"1440px"} h={"160px"}>
          <Box>

            <Image src={logotipo} w={"307px"} h={"113px"}
              marginTop={"21px"} marginLeft={"566px"} />

          </Box>
          <Box>
            <Button bg={"#33A4F5"} color={"white"}
              w={"287px"} h={"74px"}
              marginTop={"41px"} marginLeft={"1112px"}
              fontSize={"24px"}
              onClick={() => goToPokedexPage(navigate)} >Pokédex</Button>
          </Box>
        </Flex>}


      {isOnPokedexPage &&
        <Flex flex={"row"} alignItems='center' w={"1440px"} h={"160px"}>

          <Image src={goBack}
            w={"7.29px"} h={"14.58px"}
            marginTop={"5.21px"} marginLeft={"8.33px"}></Image>
          <Link onClick={() => goToPokemonsListPage(navigate)} fontSize={"24px"}
            w={"210px"} h={"36px"}
            marginTop={"100px"} marginLeft={"62px"}>Todos Pokémons</Link>


          <Box >
            <Heading >
              <Image src={logotipo}
                w={"307px"} h={"113px"}
                marginTop={"21px"} marginLeft={"566px"} /></Heading>
          </Box>
        </Flex>}

      {isOnPokemonDetailPage &&
        <Flex display={"flex"} alignItems='center' w={"1440px"} h={"160px"}>
          <Box>
          <Image src={goBack}
            w={"7.29px"} h={"14.58px"}
            marginTop={"5.21px"} marginLeft={"8.33px"}></Image>
          <Link onClick={() => goToPokemonsListPage(navigate)} fontSize={"24px"}
            w={"210px"} h={"36px"}
            marginTop={"100px"} marginLeft={"62px"}>Todos Pokémons</Link>
          </Box>
         
          <Box>
            <Image src={logotipo} w={"307px"} h={"113px"}
              marginTop={"21px"} marginLeft={"566px"} />
          </Box>

          <Box>
            <Button bg={"#FF6262"} color={"white"}
              w={"226px"} h={"57px"}
              marginTop={"51px"} marginLeft={"1174px"}
              fontSize={"24px"}
            >Excluir da Pokédex</Button>
          </Box>

        </Flex>}

    </>
  )
}

export default Header