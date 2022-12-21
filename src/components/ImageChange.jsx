import { Container, Stack, Image } from "@chakra-ui/react";
import jincat from "@assets/jincat.png";

export default function ImageChange() {
  return (
    <Container>
      <Stack>
        {/* cat change */}
        <Image
          src={jincat}
          position={"absolute"}
          w={450}
          h={450}
          right={"430px"}
          bottom={"-630px"}
        />
      </Stack>
    </Container>
  );
}
