import { Box, Button, Flex, Grid, Heading, Image } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'
import image from './image.svg'
const Home = () => {
    return (
        <div>
            <Grid templateColumns={'repeat(auto-fit , minmax(300px , 1fr))'} alignItems={"center"} width={"100%"} height={'100%'}   px={"9%"}  py={"9%"} gap={"2rem"} >
                <Box>
                    <Heading mb={"2.5"} fontWeight={"semibold"} textTransform={"capitalize"}>world's largest coding communitiy is here !</Heading>
                    <Text mb={"2.5"} >Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsum distinctio doloribus, a dignissimos optio soluta quod alias error aliquam?</Text>
                    <Button  textTransform={"capitalize"} backgroundColor={"skyblue.900"} border={"1px solid"}>join now</Button>
                </Box>
                <Box>
                    <Image src={image}></Image>
                </Box>
            </Grid>
        </div>
    )
}

export default Home
