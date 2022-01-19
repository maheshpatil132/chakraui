import { Avatar, Box, Grid, GridItem, Icon, Text, transform,Flex} from '@chakra-ui/react'
import React from 'react'

import ReviewBox from './ReviewBox'
const Review = () => {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    return (
        <div>
            <Text textTransform={'capitalize'} textAlign={'center'} fontSize={'5xl'} mb={'3%'} >reviews</Text>
            <Grid templateColumns={'repeat(auto-fit , minmax(300px , 1fr))'} py={5} gap={'2rem'}>
        
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />
            <ReviewBox />

            </Grid>
        </div>
    )
}

export default Review
