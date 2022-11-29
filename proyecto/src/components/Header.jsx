import React from 'react'
import'./css/styles.css'
import { Box ,Button, Center} from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { } from '@chakra-ui/react'
const Header = () => {
    const outerBoxStyles = {
        boxSize: '250px',
        p: '10',
        background:
            'url(https://blog.biciclaje.es/wp-content/uploads/2017/02/bicicleta-atardecer-enamorate-de-tu-bici.jpg) center/cover no-repeat',
        }
    
        const innerBoxStyles = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        boxSize: 'full',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '20px',
        }
return (

<Flex flexDirection='column' gap='24px' justifyContent='space-evenly' w='full'>
    
        <Box sx={outerBoxStyles}boxSize="100%" w='full'>
        <Box mt='5%'>
        <Center> DOMINA EL TERRENO</Center>
        <Center gap='10px'>
        <Button  colorScheme='black' variant='outline'>
        VER DETALLES
        </Button>
        <Button  colorScheme='black' variant='outline'>
        VER VIDEO
        </Button>
        </Center>
        
        </Box>
        </Box>
    
        <Box sx={outerBoxStyles}>
        <Box mt='20%'>
        <Center> DOMINA EL TERRENO</Center>
        <Center gap='20px'>
        <Button  colorScheme='black' variant='outline'>
        <Text fontSize='xs'> VER DETALLES</Text>
        </Button>
        <Button  colorScheme='black' variant='outline'>
        <Text fontSize='xs'> VER VIDEOS</Text>
        </Button>
        </Center>
        
        </Box>
        </Box>

    </Flex>
        )
        }
{/* <Box position="absolute" h='100%' w='100%'>

            <Image
            src="https://blog.biciclaje.es/wp-content/uploads/2017/02/bicicleta-atardecer-enamorate-de-tu-bici.jpg"
            alt="img1"
            w="100%"
            h="40%"
            objectFit="cover">
        </Image>
        </Box>
        <Center  position="relative" h='100%' w='100%'>
        <Center  h='80%' w='30%' mt='10%' gap='2px' >
        <Button  colorScheme='blue'>Button</Button>
        <Button colorScheme='blue'>Button</Button>
        </Center>
        </Center> */}
 

export default Header