import { Box, Flex, Text } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import React from 'react'

const Navbar = () => {
    return (
        <Flex bg='tomato'
            width='100%'
            px='5'
            py='4'
            justifyContent='space-between'
            alignItems='center'
        >
            <Flex flexDirection='row'
                justifyContent='left'
                alignItems='center'>
                <Image maxW='10%' src='https://www.zarla.com/images/zarla-zona-alegra-1x1-2400x2400-20210915-qrwqpxb4kp83pxcfhgj8.png?crop=1:1,smart&width=250&dpr=2' />
                <Text color='white'
                    pl='3'
                    fontSize='20px'>
                    Mi primer Navbar con Chakra ✨
                </Text>
            </Flex>
            <Box display="flex" justifyContent="space-around" alignItems="center">
                <Link
                    as={NavLink}
                    to="/Home"  >
                </Link>

            </Box>

        </Flex >
    )
}

export default Navbar