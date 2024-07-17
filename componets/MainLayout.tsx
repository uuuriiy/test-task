import { Flex, FlexProps } from "@chakra-ui/react";
import { MainLayoutStyles } from "styles/index";

export const MainLayout = ({ children }: { children: React.ReactNode; }) =>
    <Flex {...MainLayoutStyles as FlexProps}>
        {children}
    </Flex>