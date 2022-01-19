import { Avatar, Box, Grid, GridItem, Icon, Text, transform,Flex} from '@chakra-ui/react'
import React from 'react'
import {ImQuotesLeft} from 'react-icons/im'
import { motion } from 'framer-motion'
const Review = () => {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    return (
        <div>
            <Text textTransform={'capitalize'} textAlign={'center'} fontSize={'5xl'} mb={'3%'} >reviews</Text>
            <Grid templateColumns={'repeat(auto-fit , minmax(300px , 1fr))'} py={5} gap={'2rem'}>
        
             <GridItem 
             
             >
  
              <Box position={'relative'} display={'grid'} gridTemplate={'repeat(auto-fit, minmax(auto,1fr))'} gap={'1rem'} border={'1px solid'} px={5} py={'7%'} borderRadius={'3.8px'}>
              <Icon position={'absolute'} color={'white'} top={'-5'} left={'-4'} borderRadius={'50%'} padding={3} backgroundColor={'blue.600'}  boxSize={'50px'}  as={ImQuotesLeft}></Icon>
              <Flex  gap={3} fontSize={'2xl'}>
              <Avatar src='https://i.pravatar.cc/300'></Avatar>
              <Text>Mahesh patil</Text>
              </Flex>
               
               <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, at. Impedit qui libero sapiente sequi quo fugiat ab, atque quis reiciendis sint maxime fuga id obcaecati ratione nihil officia corrupti.</Text>
              </Box>

             </GridItem>

             <GridItem>
  
              <Box   position={'relative'}  display={'grid'} gridTemplate={'repeat(auto-fit, minmax(auto,1fr))'} gap={'1rem'} border={'1px solid'} px={5} py={'7%'} borderRadius={'3.8px'}>
                 <Icon position={'absolute'}  color={'white'} top={'-5'} left={'-4'} borderRadius={'50%'} padding={3} backgroundColor={'blue.600'}  boxSize={'50px'}  as={ImQuotesLeft}></Icon>
                 <Flex  gap={3} fontSize={'2xl'}>
              <Avatar src='https://i.pravatar.cc/300'></Avatar>
              <Text>Mahesh patil</Text>
              </Flex>
               <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, at. Impedit qui libero sapiente sequi quo fugiat ab, atque quis reiciendis sint maxime fuga id obcaecati ratione nihil officia corrupti.</Text>
              </Box>

             </GridItem>

             <GridItem>
  
              <Box   position={'relative'}  display={'grid'} gridTemplate={'repeat(auto-fit, minmax(auto,1fr))'} gap={'1rem'} border={'1px solid'} px={5} py={'7%'} borderRadius={'3.8px'}>
              <Icon position={'absolute'}  color={'white'} top={'-5'} left={'-4'} borderRadius={'50%'} padding={3} backgroundColor={'blue.600'}  boxSize={'50px'}  as={ImQuotesLeft}></Icon>
              <Flex  gap={3} fontSize={'2xl'}>
              <Avatar src='https://i.pravatar.cc/300'></Avatar>
              <Text>Mahesh patil</Text>
              </Flex>
               <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, at. Impedit qui libero sapiente sequi quo fugiat ab, atque quis reiciendis sint maxime fuga id obcaecati ratione nihil officia corrupti.</Text>
              </Box>

             </GridItem>

             <GridItem>
  
              <Box   position={'relative'}  display={'grid'} gridTemplate={'repeat(auto-fit, minmax(auto,1fr))'} gap={'1rem'} border={'1px solid'} px={5} py={'7%'} borderRadius={'3.8px'}>
              <Icon position={'absolute'}  color={'white'} top={'-5'} left={'-4'} borderRadius={'50%'} padding={3} backgroundColor={'blue.600'}  boxSize={'50px'}  as={ImQuotesLeft}></Icon>
              <Flex  gap={3} fontSize={'2xl'}>
              <Avatar src='https://i.pravatar.cc/300'></Avatar>
              <Text>Mahesh patil</Text>
              </Flex>
               <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, at. Impedit qui libero sapiente sequi quo fugiat ab, atque quis reiciendis sint maxime fuga id obcaecati ratione nihil officia corrupti.</Text>
              </Box>

             </GridItem>

             <GridItem>
  
              <Box   position={'relative'}  display={'grid'} gridTemplate={'repeat(auto-fit, minmax(auto,1fr))'} gap={'1rem'} border={'1px solid'} px={5} py={'7%'} borderRadius={'3.8px'}>
              <Icon position={'absolute'}  color={'white'} top={'-5'} left={'-4'} borderRadius={'50%'} padding={3} backgroundColor={'blue.600'}  boxSize={'50px'}  as={ImQuotesLeft}></Icon>
              <Flex  gap={3} fontSize={'2xl'}>
              <Avatar src='https://i.pravatar.cc/300'></Avatar>
              <Text>Mahesh patil</Text>
              </Flex>
               <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, at. Impedit qui libero sapiente sequi quo fugiat ab, atque quis reiciendis sint maxime fuga id obcaecati ratione nihil officia corrupti.</Text>
              </Box>

             </GridItem>

             <GridItem>
  
              <Box  position={'relative'}  display={'grid'} gridTemplate={'repeat(auto-fit, minmax(auto,1fr))'} gap={'1rem'} border={'1px solid'} px={5} py={'7%'} borderRadius={'3.8px'}>
              <Icon position={'absolute'}  color={'white'} top={'-5'} left={'-4'} borderRadius={'50%'} padding={3} backgroundColor={'blue.600'}  boxSize={'50px'}  as={ImQuotesLeft}></Icon>
              <Flex  gap={3} fontSize={'2xl'}>
              <Avatar src='https://i.pravatar.cc/300'></Avatar>
              <Text>Mahesh patil</Text>
              </Flex>
               <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, at. Impedit qui libero sapiente sequi quo fugiat ab, atque quis reiciendis sint maxime fuga id obcaecati ratione nihil officia corrupti.</Text>
              </Box>

             </GridItem>

            </Grid>
        </div>
    )
}

export default Review
