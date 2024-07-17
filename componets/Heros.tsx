import { Flex, Heading } from "@chakra-ui/react";
import { black } from "styles/theme";
import { getHeros } from "@/utils/index";

export const Heros = () => {
    console.log(getHeros(), 'heros');
    
    return (
        <Flex direction={"column"}>
            <Flex justifyContent={"center"} padding={"25px"}>
                <Heading as='h2' size='xl' noOfLines={1} color={black}>Heros</Heading>
            </Flex>
        </Flex>
    )
}