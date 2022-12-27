import { Container, Stack, Text, Link } from "@chakra-ui/react";

export default function Entry() {
  return (
    <Container>
      <Stack>
        <Link href={"https://open.kakao.com/o/gJ1u8dOe"} target="_blank">
          {/* 카카오톡 입장링크 */}
          <Text
            rounded={"full"}
            px={25}
            bg={"purple.400"}
            _hover={{ bg: "purple.600" }}
            position={"absolute"}
            right={"900px"}
            top={"400px"}
          >
            Entry
          </Text>
          {/* Entry 문구 */}
        </Link>
      </Stack>
    </Container>
  );
}
