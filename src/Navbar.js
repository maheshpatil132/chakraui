import React from 'react'
import {  Button, Flex, Heading } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/react'
import { IconButton } from '@chakra-ui/react';
import { MoonIcon } from '@chakra-ui/icons'
import { SunIcon } from '@chakra-ui/icons';



const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    

  
    return (
        <nav >

            <Flex width={"100%"} marginRight={'auto'} position={'relative'}  alignItems={"center"}  px={"9%"} py={"3"} gap={"2rem"} borderBottom={"1px solid"} >
                <Heading fontWeight={"semibold"} marginRight={"auto"} textTransform={"capitalize"} fontSize={"3xl"}>.coders </Heading>
                
                <IconButton icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />} onClick={() => toggleColorMode()}>
                </IconButton>
                
                <Button  textTransform={"capitalize"} border={'1px solid'} >join</Button>
                
            </Flex>

        </nav>
    )
}

export default Navbar













