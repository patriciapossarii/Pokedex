import logotipo from "../../assets/logo.svg";
import goBack from "../../assets/buttonGoBack.svg"
import { Image, Box, Flex, Button, Heading, Link, } from '@chakra-ui/react'
import { goToPokedexPage, goToPokemonsListPage } from "../../Router/coordinator";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext"
import { useContext } from "react";
import { ModalPage } from "../Modal/modal";


const Header = (props) => {
  const { isOnPokedexPage, isOnPokemonDetailPage, isOnPokemonListPage, pokemon, isOnPageDontFound } = props
  const navigate = useNavigate()
  const context = useContext(GlobalContext)
  const { removeFromPokedex, isOpen, setIsOpenDel, isOpenDel } = context;

  return (
    <Flex>
      {isOnPokemonListPage &&
        <Flex display={"flex"} justifyItems={"center"} alignItems={'center'} h={"160px"}>
          <Box>
            <Image
              position={"absolute"}
              src={logotipo} w={"307px"} h={"113px"}
              top={"21px"} left={"566px"} />
          </Box>
          <Box>
            <Button
              position={"absolute"}
              bg={"#33A4F5"} color={"white"}
              w={"287px"} h={"74px"}
              top={"41px"} marginLeft={"1112px"}
              fontSize={"24px"}
              onClick={() => goToPokedexPage(navigate)} >Pokédex</Button>
          </Box>
        </Flex>}


      {isOnPageDontFound &&
        <Flex display={"flex"} justifyItems={"center"} alignItems={'center'} h={"160px"}>
          <Box>
            <Image
              position={"absolute"}
              src={logotipo} w={"307px"} h={"113px"}
              top={"21px"} left={"566px"} />
          </Box>
          <Box>
            <Image src={goBack}
              position={"absolute"}
              left={"40px"} right={"37.54%"}
              top={"110px"} bottom={"20.83%"}></Image>
            <Link onClick={() => goToPokemonsListPage(navigate)}
              position={"absolute"}
              w={"210px"} h={"36px"}
              left={"62px"} top={"100px"}
              fontFamily={"Poppins"} fontStyle={"normal"}
              fontWeight={"700"} fontSize={"24px"}
              lineHeight={"36px"}
              textDecorationLine={"underline"}
            >
              Todos Pokémons</Link>
          </Box>
        </Flex>}


      {isOnPokedexPage &&
        <Flex flex={"row"} alignItems='center' w={"1440px"} h={"160px"}>
          <Image src={goBack}
            position={"absolute"}
            left={"40px"} right={"37.54%"}
            top={"110px"} bottom={"20.83%"}></Image>
          <Link onClick={() => goToPokemonsListPage(navigate)}
            position={"absolute"}
            w={"210px"} h={"36px"}
            left={"62px"} top={"100px"}
            fontFamily={"Poppins"} fontStyle={"normal"}
            fontWeight={"700"} fontSize={"24px"}
            lineHeight={"36px"}
            textDecorationLine={"underline"}
          >
            Todos Pokémons</Link>
          <Box >
            <Heading >
              <Image
                position={"absolute"}
                src={logotipo} w={"307px"} h={"113px"}
                top={"21px"} left={"566px"} />
            </Heading>
          </Box>
        </Flex>}


      {isOnPokemonDetailPage &&
        <Flex display={"flex"} alignItems='center' w={"1440px"} h={"160px"}>
          <Box>
            <Image src={goBack}
              position={"absolute"}
              left={"40px"} right={"37.54%"}
              top={"110px"} bottom={"20.83%"}></Image>
            <Link onClick={() => goToPokemonsListPage(navigate)}
              position={"absolute"}
              w={"210px"} h={"36px"}
              left={"62px"} top={"100px"}
              fontFamily={"Poppins"} fontStyle={"normal"}
              fontWeight={"700"} fontSize={"24px"}
              lineHeight={"36px"}
              textDecorationLine={"underline"}
            >
              Todos Pokémons</Link>
          </Box>
          <Box>
            <Image
              position={"absolute"}
              src={logotipo} w={"307px"} h={"113px"}
              top={"21px"} left={"566px"} />
          </Box>
          <Box>
            <Button zIndex={"popover"} bg={"#FF6262"} color={"white"}
              w={"226px"} h={"57px"}
              marginTop={"51px"} marginLeft={"1174px"}
              fontSize={"24px"}
              onClick={() => {
                removeFromPokedex(pokemon)
                setIsOpenDel(true)
                console.log(pokemon)
              }} >Excluir da Pokédex</Button>

            {isOpenDel ? <ModalPage></ModalPage> : <></>}
          </Box>
        </Flex>}

      {isOpen ? <ModalPage></ModalPage> : <></>}
    </Flex>
  )
}

export default Header