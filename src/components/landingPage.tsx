import { Container, Text, Flex } from "@mantine/core";
import DynamicText from "./DynamicText";

function LandingPage(){
    return(
        <Container>
            <Text>Husna Maulana</Text>
            <Flex gap='xs'>
                <Text>I'm a </Text>
                <Text td='underline'> 
                    <DynamicText/>
                </Text>
            </Flex>
        </Container>
    )
}

export default LandingPage;