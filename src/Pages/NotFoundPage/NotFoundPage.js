import error404 from "../../assets/404.gif"
import { Image, Flex, Text } from "@chakra-ui/react"
import Header from "../../Components/Header/Header"

const NotFoundPage = () => {


    return (

        <div>
            <Header isOnPageDontFound={true}/>
            <Flex display={"flex"} flexDirection={"column"}
                alignItems={"center"} justifyContent={"center"}
                marginTop={"60px"} fontSize={40}>
                <Text 
                width={"250px"} height={"72px"} 
                 left={"103px"} top={"41px"}
                 fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700"}
                 fontSize={"48px"} lineHeight={"72px"}
                > Oh,no! </Text><p> Página não encontrada</p>
                <Image src={error404} marginTop={"70px"}/>
            </Flex>

        </div>
    )
}

export default NotFoundPage