import { Box, Img, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import styled from 'styled-components'
import { Fade } from 'react-reveal';



const TechStack = () => {
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    const logos = [
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


    return (
        <Box paddingY={"40px"} paddingTop={"80px"} bg={bg} color={color} height={"max-content"} id="techStack">
            <Text textAlign={"center"} fontSize="3xl" color={color} paddingY={"20px"}>
                Tech Stack
            </Text>
            <Fade left cascade>
                <Box
                    width="60%"
                    margin="auto"
                    padding="50px"
                    display="flex"
                    justifyContent="center"
                    gap="50px"
                    flexWrap="wrap"
                    marginY={"30px"}>
                    {logos.map((elem) => {
                        return <Box className='hvr-pop'
                            border="3px solid " width="120px" borderRadius="15px"
                            box-shadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" _hover={{ borderColor: "#3379b5" }}>
                            <ImageWrapper>
                                <Img borderRadius="15px" width={"100%"} padding="20px" src={elem.image} alt={elem.alt} />
                                <Text color={color} textAlign={"center"}>{elem.alt}</Text>
                            </ImageWrapper>
                        </Box>
                    })}
                </Box >
            </Fade>
        </Box >
    )
}
const ImageWrapper = styled.div`
;
padding:10px;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
:hover {
 color: #ffee10;
}
Img:hover{
    padding:17px;
}
`
export default TechStack;