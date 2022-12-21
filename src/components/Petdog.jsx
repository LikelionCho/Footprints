import { Container, Stack, Image} from "@chakra-ui/react";
import petdog from "@assets/petdog.gif";

export default function Petdog() {
  return (
    <Container>
        <Stack>
          <Image
            src={petdog}
            position={"absolute"}
            w={350}
            h={450}
            left={"1880px"}
            top={"650px"}
          />
        </Stack>
      </Container>
  );
}
