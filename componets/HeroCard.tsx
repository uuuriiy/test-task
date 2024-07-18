import { Card, CardBody, CardHeader, Heading, Text } from "@chakra-ui/react";
import { HeroCardProps } from "../types/index";
import { black, light_grey } from "@/styles/theme";
import { cardBodyText } from "@/utils/index";

export const HeroCard = ({ hero: { id, name, birth_year, height, mass, gender }, arr, index }: HeroCardProps) =>
    <Card key={id} gridColumn={arr.length - 1 === index ? 2 : 'inherit'} borderRadius={"10px"}>
        <CardHeader display={"flex"} justifyContent={"center"}>
            <Heading as='h3' size='xl' color={black}>{name}</Heading>
        </CardHeader>
        <CardBody display={"flex"} flexDirection={"column"} gap={"20px"}>
            {cardBodyText(birth_year, height, mass, gender).map(({ id, mainText, helperText }) => (
                <Text key={id} fontSize='2xl' fontWeight={400} color={light_grey}>
                    <span style={{ fontWeight: 700 }}>{helperText} </span>{mainText}
                </Text>
            ))}
        </CardBody>
    </Card>