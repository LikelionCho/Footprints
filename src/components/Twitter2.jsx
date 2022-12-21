import { Container, Stack, Text, Image, Link } from "@chakra-ui/react";
import twitter from "@assets/twitterbird.png";

export default function twitter2() {
  return (
    <Container>
        <Stack>
          <Link href={"https://twitter.com/with_my_friend"} target="_blank">
            {/* tweet change */}
            <div>
              <Image
                src={twitter}
                position={"absolute"}
                w={150}
                h={150}
                right={"770px"}
                top={"130px"}
              />
            </div>
            {/* 트위터 새 */}

            <Text
              rounded={"full"}
              color={"purple.600"}
              fontWeight={400}
              fontSize={{ base: "3xl", sm: "1xl", md: "1xl" }}
              _hover={{ bg: "yellow.600" }}
              position={"absolute"}
              right={"920px"}
              top={"115px"}
            >
              tweeeet!
            </Text>
            {/* 트위터 문구 */}
          </Link>
        </Stack>
    </Container>
  );
}
