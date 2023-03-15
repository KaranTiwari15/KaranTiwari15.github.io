import { Box, Button, Flex, HStack, Img, SimpleGrid, Text, useColorModeValue, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaLink } from 'react-icons/fa'
import { Fade } from 'react-reveal';
import ScrollAnimation from 'react-animate-on-scroll';

const Projects = () => {


    const projectsArr = [
        {
            title: "CakeShop Web Application",
            banner: require('./res/other/cakeShop.jpeg'),
            description: "This is E-commerce website platform where user an buy the cakes of their favourite flavours .",
            tech: [
                {
                    image: require('./res/other/html-5.png'),
                    alt: "HTML"
                },
                {
                    image: require('./res/other/css.png'),
                    alt: "CSS"
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
            ],
            github: 'https://github.com/KaranTiwari15/CakeshopApp',
        },
        {
            title: "Flash-Pay",
            banner: require('./res/other/flash-pay.jpeg'),
            description: "Flash pay is REST API services Application by which one can perform various operations like send and receive money, pay different different bills, view transaction details, add balance to wallet etc..",
            tech: [
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
            ],
            github: 'https://github.com/KaranTiwari15/Flash-Pay',

        },

    ]
    //     [url=https://imgbb.com/][img]https://i.ibb.co/PYfBtPr/atom.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/4289K4T/css-3.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/LxNQYxN/email.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/0rdPJFJ/express.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/jf27KLs/github.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/Sfj8LR3/html.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/KXgBjT5/java-script.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/3yBv9h4/linkedin.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/rHjfgnF/mongodb.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/2MyRydr/node-js.png[/img][/url]
    // [url=https://imgbb.com/][img]https://i.ibb.co/Ld0PCpp/redux.png[/img][/url]
    const bg = useColorModeValue('white', '#10264f')
    const color = useColorModeValue('#10264f', 'white')
    return (
        <Box paddingY={"30px"} paddingTop={"80px"} bg={bg} color={color} id="Projects">
            <Text textAlign={"center"} fontSize="3xl" color={color} >
                Projects
            </Text>
            <VStack paddingY={"30px"} width={"70%"} margin={"auto"} gap={"50px"}>
                {projectsArr.map((elem) => {
                    return <HStack className='hvr-grow-shadow' >
                        <SimpleGrid columns={[1, 1, 1, 2]} padding={"40px"} justifyContent={"center"} alignItems={"center"} gap={"20px"} border={"3px solid"} borderColor={color} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px" borderRadius={"15px"}>
                            <Fade left cascade >
                                <Box overflowY={"hidden"} height={"300px"}>
                                    <Img border="3px solid" borderColor={color} borderRadius={"10px"} width={"2500px"} src={elem.banner} alt={elem.title} />
                                </Box>
                            </Fade>
                            <VStack alignSelf={"flex-start"}>
                                <Fade right cascade>
                                    <Text fontSize="2xl" color={color} textAlign={"center"}>
                                        {elem.title}
                                    </Text>
                                </Fade>
                                <Text fontSize={"18px"} align={"center"}>
                                    {elem.description}
                                </Text>
                                <Flex flexWrap={'wrap'} justifyContent={"center"} gap={"10px"} paddingY={"20px"} alignSelf={"center"}>{elem?.tech?.map((el) => <Img className='hvr-pop' alignSelf={"start"} width={"30px"} src={el.image} alt={el.alt} />)} </Flex>
                                <HStack align={"end"}>
                                    <a href={elem.github} target={"_blank"} ><Button className='hvr-underline-from-center' leftIcon={<FaLink />}>Github</Button></a>
                                    <a href={elem.live} target={"_blank"} ><Button className='hvr-underline-from-center' leftIcon={<FaLink />}>Live</Button></a>
                                </HStack>
                            </VStack>
                        </SimpleGrid>
                    </HStack>
                })}
            </VStack>
        </Box >
    )
}

export default Projects