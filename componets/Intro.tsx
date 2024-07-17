import { Flex, Heading } from "@chakra-ui/react";
import BG_Intro from "../public/images/StarWars_Intro.png";
import { black } from "styles/theme";
import Image from "next/image";

export const Intro = () => {
    return (
        <Flex direction={"column"} borderRadius={"10px"}>
            <Flex justifyContent={"center"} padding={"25px"}>
                <Heading as='h1' size='2xl' noOfLines={1} color={black}>Welcome to Starwars heros website</Heading>
            </Flex>
            <Flex w={"100%"} h={"100vh"} position={"relative"}>
                <Image src={BG_Intro.src} fill alt="intro image" />
            </Flex>
        </Flex>
    )
};