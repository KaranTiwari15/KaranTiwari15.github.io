import { Box, color, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { Fade } from 'react-reveal'

const Skills = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')

    const frontend = [
        {
            image: require('./res/other/java-script.png'),
            alt: "Javascript"
        },
        {
            image: require('./res/other/html-5.png'),
            alt: "HTML"
        },
        {
            image: require('./res/other/css.png'),
            alt: "CSS"
        },
        {
            image: require('./res/other/typescript.png'),
            alt: "TypeScript"
        },

    ]


    const backend = [
        {
            image: require('./res/other/oracle.png'),
            alt: "Oracle"
        },
        {
            image: require('./res/other/java.png'),
            alt: "java"
        },
        {
            image: require('./res/other/Hibernate.png'),
            alt: "Hibernate"
        },
        {
            image: require('./res/other/springBoot.png'),
            alt: "SpringBoot"
        },
        {
            image: require('./res/other/sql-server.png'),
            alt: "SQL"
        },
    ]


    const communication = [
        {
            image: require('./res/other/partners.png'),
            alt: "Teamwork"
        },
    ]

    return (
        <Box bg={bg} color={color} paddingTop={"80px"} id="Skills">
            <Text textAlign={"center"} fontSize="3xl" color={color} paddingY={"20px"}>
                Skills
            </Text>
            <SimpleGrid width={"60%"} margin={"auto"} columns={[1, 2, 2, 3]} padding={"20px"} justifyContent={"space-between"} alignItems={"start"} gap={"20px"}>
                <Fade top cascade >
                    <VStack gap={'10px'}>
                        <Text bg={bg} textAlign={"center"} fontSize="2xl" color={color} paddingY={"20px"}>
                            Frontend Skills
                        </Text>
                        {frontend.map((elem) => {
                            return <Box borderColor={bg} className='hvr-grow-shadow' alignItems={"center"} borderRadius={"10px"} gap={'20px'} display={"flex"} width={"100%"} bg={"#3379b5"} padding={"15px"} color={color} key={elem.title}> <Img width={"11%"} src={elem.image} alt={elem.alt} /> <Text fontSize={'xl'}> {elem.alt} </Text> </Box>
                        })}
                    </VStack>
                </Fade>
                <Fade top cascade >
                    <VStack gap={'10px'}>
                        <Text bg={bg} textAlign={"center"} fontSize="2xl" color={color} paddingY={"20px"}>
                            Backend Skills
                        </Text>
                        {backend.map((elem) => {
                            return <Box borderColor={bg} className='hvr-grow-shadow' alignItems={"center"} borderRadius={"10px"} gap={'20px'} display={"flex"} width={"100%"} bg={"#3379b5"} padding={"15px"} color={color} key={elem.title}> <Img width={"11%"} src={elem.image} alt={elem.alt} /> <Text fontSize={'xl'}> {elem.alt} </Text> </Box>
                        })}
                    </VStack>
                </Fade>
                <Fade top cascade >
                    <VStack gap={'10px'}>
                        <Text bg={bg} textAlign={"center"} fontSize="2xl" color={color} paddingY={"20px"}>
                            Communications Skills
                        </Text>
                        {communication.map((elem) => {
                            return <Box borderColor={bg} sYellow className='hvr-grow-shadow' alignItems={"center"} borderRadius={"10px"} gap={'20px'} display={"flex"} width={"100%"} bg={"#3379b5"} padding={"15px"} color={color} key={elem.title}> <Img width={"11%"} src={elem.image} alt={elem.alt} /> <Text fontSize={'xl'}> {elem.alt} </Text> </Box>
                        })}
                    </VStack>
                </Fade>
            </SimpleGrid>
        </Box>
    )
}

export default Skills;