import { Container, Text, Flex, Space } from "@mantine/core";
import DynamicText from "./DynamicText";

function LandingPage() {
    return (
        <Flex justify="center" align="flex-start"  direction="column" style={{ textAlign: 'left', width: "100%" }}>
            <Text size="3rem" fw={700}  c='white'>David Martinez</Text>
            <Space h="xs" />
            <Flex justify="flex-start" align="center" gap="xs">
            <Text size="2rem" c='white'>I'm a </Text>
                <Text size="2rem" td="underline" c='white'> 
                    <DynamicText />
                </Text>
            </Flex>
        </Flex>
    );
}

export default LandingPage;
