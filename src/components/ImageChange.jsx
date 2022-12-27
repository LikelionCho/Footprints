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
          w={420}
          h={420}
          right={"300px"}
          bottom={"-570px"}
        />
      </Stack>
    </Container>
  );
}
