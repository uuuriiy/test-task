"use client";

import { Card, Grid, Skeleton, SkeletonText } from '@chakra-ui/react'

export const LoadingSkeleton = () =>
    <Grid gridTemplateColumns={"repeat(3, 1fr)"} gap={"10px"} padding={"0 10px"}>
        {new Array(10).fill(0).map((_, i, arr) => (
            <Card key={i} height={"150px"} gridColumn={arr.length - 1 === i ? 2 : 'inherit'}>
                <Skeleton height='20px' />
                <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />
            </Card>
        ))}
    </Grid>