import { Container, Stack, Image, Text, Link } from "@chakra-ui/react";
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
          left={"380px"}
          bottom={"-660px"}
        />
        <Link
          href={
            "https://www.notion.so/eb5cf54aa96f485b8f20a2b98a087ec1?v=0729cdd64d0e4f9d842236bbff9c0cdb"
          }
          target="_blank"
        >                    
        <Text
          rounded={"full"}
          px={25}
          _hover={{ bg: "yellow.600" }}
          position={"absolute"}
          right={"930px"}
          bottom={"-550px"}
        >          

          발자국에 편지보내기
          </Text>
        </Link>
          {/* 발자국에 편지보내기 문구 */}
      </Stack>
    </Container>
  );
}
