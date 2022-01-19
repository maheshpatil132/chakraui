import { Box, Flex, Grid, GridItem, Heading, Icon, Image, Text, IconButton,Button } from '@chakra-ui/react'
import React from 'react'
import { MdVerifiedUser } from 'react-icons/md'
import image from './image3.svg'
import { HiAcademicCap } from "react-icons/hi";
import { BsCalendarCheckFill } from "react-icons/bs";
import Review from './Review';

const Service = () => {
    return (
        <div>
            <Flex width={"100%"} direction={'column'} height={'100%'} backgroundColor={'blackAlpha.100'} px={"9%"} py={"5%"} gap={"4rem"} borderBottom={"1px solid"}>
                <Box flex={"100%"}>
                    <Heading textAlign={"center"} fontWeight={"semibold"} fontSize={'40px'} mb={'6%'} >why you should join us ?</Heading>
                    <Grid width={'100%'} templateColumns='repeat(auto-fit, minmax(200px,1fr))' placeItems={"center"} gap={2}>
                        <GridItem textAlign={'center'} px={7} py={5}>
                            <Icon margin={'auto'} mb={'2'} boxSize={'16'} as={MdVerifiedUser}></Icon>
                            <Heading>6000+</Heading>
                            <Text textTransform={"capitalize"}>students are joined</Text>
                        </GridItem>
                        <GridItem textAlign={'center'} px={7} py={5}>
                            <Icon boxSize={'16'} mb={'2'} as={HiAcademicCap}></Icon>
                            <Heading>6000+</Heading>
                            <Text textTransform={"capitalize"}>colleges across the india</Text>
                        </GridItem>
                        <GridItem textAlign={'center'} px={7} py={5}>
                            <Icon boxSize={'16'} mb={'2'} as={BsCalendarCheckFill}></Icon>
                            <Heading>6000+</Heading>
                            <Text textTransform={"capitalize"}>free events organizsed</Text>
                        </GridItem>
                    </Grid>
                </Box>
                <Flex wrap={'wrap'} alignItems={'center'} justifyContent={'center'} gap={'3rem'}>
                    <Text textAlign={'center'} fontSize={'4xl'}>want to join world's largest coding community  ?</Text>
                <Button  border={'1px solid'} width={'fit-content'} py={'3'} px={'5'} >join now</Button>
                </Flex>
                
                {/* <Box>
                    <Image src={image}></Image>
                </Box> */}
            <Review />

            </Flex>
            
        </div>
    )
}

export default Service
