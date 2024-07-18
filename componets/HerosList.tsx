"use client";

import { useEffect, useState, Suspense } from "react";
import { Flex, Heading, Text, Grid, Card, CardBody, CardHeader, Button } from "@chakra-ui/react";
import { black, light_grey } from "styles/theme";
import { getTotalPages } from "@/utils/index";
import { useFetchHeros } from "../hooks/useFetchHeros";
import Loading from "../app/loading";
import { HeroCard } from "./HeroCard";
// import { LoadingSkeleton } from "./LoadingSkeleton";

export const HerosList = () => {
    const [count, setCount] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const { heros, isLoading, isError, error } = useFetchHeros(`/people/?page=${count}`);

    useEffect(() => {
        setTotalPages(
            getTotalPages(heros?.count)
        );
    }, [heros?.count])
    
    return (
        <Flex direction={"column"} gap={"20px"}>
            <Flex justifyContent={"center"} padding={"25px"}>
                <Heading as='h2' size='2xl' noOfLines={1} color={black}>Heros</Heading>
            </Flex>
            {isLoading && <Loading />}
            {!isLoading && isError && <Text color={"red"}>{error}</Text>}
            {!isLoading && !isError && (
                <>
                    <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={"10px"} padding={"0 10px"}>
                        {!!heros?.results.length && heros?.results.map((hero, i, arr) => (
                            <HeroCard hero={hero} arr={arr} index={i} />
                        ))}
                    </Grid>
                    <Flex gap={"5px"} justifyContent={"center"} p={"20px"}>
                        {!!totalPages && new Array(totalPages)
                            .fill(0).map((item, i) => item + i + 1)
                            .map(item => (
                                <Button 
                                    key={item} 
                                    border={`1px solid ${black}`} 
                                    borderRadius={"5px"} p={"20px"} 
                                    onClick={() => setCount(() => item)}
                                >
                                    <Text fontSize='2xl' fontWeight={400} color={light_grey}>{item}</Text>
                                </Button>
                        ))}
                    </Flex>
                </>
            )}
        </Flex>
    )
}