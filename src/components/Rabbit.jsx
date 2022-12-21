import { Container, Stack, Image, Text } from "@chakra-ui/react";
import rabbit from "@assets/Rabbit.gif";

export default function Rabbit() {
  return (
    <Container>
      <Stack>
        <Image
          src={rabbit}
          position={"absolute"}
          w={650}
          h={450}
          left={"550px"}
          bottom={"-710px"}
        />
        <Text
          rounded={"full"}
          px={25}
          _hover={{ bg: "yellow.600" }}
          position={"absolute"}
          right={"1250px"}
          bottom={"-620px"}
        >
          발자국에 편지보내기
        </Text>
        {/* 발자국에 편지보내기 문구 */}
      </Stack>
    </Container>
  );
}
