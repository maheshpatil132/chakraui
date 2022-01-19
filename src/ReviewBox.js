import React from 'react';
import { Avatar, Box,  GridItem, Icon, Text,Flex} from '@chakra-ui/react'
import {ImQuotesLeft} from 'react-icons/im'
const ReviewBox = () => {
  return <div>
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
  </div>;
};

export default ReviewBox;
