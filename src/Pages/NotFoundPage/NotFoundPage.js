import Header from "../../Components/Header/Header"
import error404 from "../../assets/404.gif"
import { Image, Flex, Text } from "@chakra-ui/react"

const NotFoundPage = () => {


    return (

        <div>
            <Flex display={"flex"} flexDirection={"column"}
                alignItems={"center"} justifyContent={"center"}
                marginTop={"60px"} fontSize={40}>
                <Text> Oh Não! <p>Error 404! Página não encontrada</p></Text>
                <Image src={error404} />
            </Flex>

        </div>
    )
}

export default NotFoundPage