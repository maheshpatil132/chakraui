import { Box, Flex, Heading, Image, Button, Grid } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import React from 'react'
import image from './image2.svg'
import { MdCheckCircle } from "react-icons/md";
import {
    List,
    ListItem,
    ListIcon,
  } from '@chakra-ui/react'

const About = () => {
    return (
        <div>
            <Grid templateColumns={'repeat(auto-fit,minmax(300px,1fr))'} width={"100%"} height={'100%'}  px={"9%"} py={"9%"} gap={"4rem"} >
                <Box flex={"100%"}>
                      <Image src={image} mr={2}></Image>

                </Box>
                <Box>
                   <Heading mb={"3"} fontWeight={"semibold"} textTransform={"capitalize"}>how  the communitiy will help you ?</Heading> 
                   <Text mb={"3"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore molestiae quisquam iure nam impedit? Ipsum possimus ipsa accusantium, laboriosam temporibus neque magni in perferendis nisi animi labore autem consequatur dolor!</Text>
                   <List spacing={1}>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Lorem ipsum dolor sit amet, consectetur adipisicing elit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Assumenda, quia temporibus eveniet a libero incidunt suscipit
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  {/* You can also use custom icons from react-icons */}
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
  <ListItem>
    <ListIcon as={MdCheckCircle} color='green.500' />
    Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
  </ListItem>
</List>
<Button mt={4} border={'1px solid'} >join now</Button>
                </Box>
            </Grid>
        </div>
    )
}

export default About
