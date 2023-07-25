import {  Grid,  Text, } from '@chakra-ui/react'
import React from 'react'

import ReviewBox from './ReviewBox'
const Review = () => {
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
            <Text textAlign={'center'} textTransform={'capitalize'} fontSize={'4xl'}>made by mahesh patil</Text>
        </div>
    )
}

export default Review
