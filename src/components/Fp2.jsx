import { Container, Stack, Image } from "@chakra-ui/react";
import fp2 from "@assets/footprint.gif";

export default function Fp2() {
  return (
    <Container>
      <Stack>
        <Image
          src={fp2}
          position={"absolute"}
          w={300}
          h={400}
          left={"780px"}
          bottom={"-650px"}
        />
        {/* 걸음걸이 gif */}
      </Stack>
    </Container>
  );
}
