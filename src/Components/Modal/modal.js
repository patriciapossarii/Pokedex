import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
} from '@chakra-ui/react'
import { useContext } from 'react'
import { GlobalContext } from '../../contexts/GlobalContext'

export function ModalPage() {
    const context = useContext(GlobalContext)
    const { isOpen, setIsOpen, isOpenDel, setIsOpenDel } = context


    return (
        <>
            <Modal isOpen={isOpen || isOpenDel} onClose={() => {
                setIsOpen(false)
                setIsOpenDel(false)
            }}>

                <ModalOverlay />
                <ModalContent 
                width={"451px"} height={"222px"} top={"30%"}>
                    {isOpen ?
                        <>
                            <ModalHeader
                                position={"absolute"} width={"250px"} height={"72px"} 
                                left={"103px"} top={"41px"}
                                fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700"}
                                fontSize={"48px"} lineHeight={"72px"}>Gotcha!</ModalHeader>
                            <ModalBody
                                position={"absolute"} width={"437px"} height={"24px"} left={"34px"} top={"123px"}
                                fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700"}
                                fontSize={"16px"} lineHeight={"24px"}>
                                O Pokémon foi adicionado a sua Pokédex
                            </ModalBody>
                        </>

                        :

                        <>
                            <ModalHeader
                                position={"absolute"} width={"250px"} height={"72px"} 
                                left={"103px"} top={"41px"}
                                fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700"}
                                fontSize={"48px"} lineHeight={"72px"}>Oh,no!</ModalHeader>
                            <ModalBody
                               position={"absolute"} width={"437px"} height={"24px"} left={"34px"} top={"123px"}
                               fontFamily={"Poppins"} fontStyle={"normal"} fontWeight={"700"}
                               fontSize={"16px"} lineHeight={"24px"}>
                                O Pokémon foi removido da sua Pokedéx
                            </ModalBody>
                        </>

                    }
                </ModalContent>
            </Modal>
        </>
    )
}