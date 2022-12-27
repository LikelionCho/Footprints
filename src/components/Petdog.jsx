import { Container, Stack, Image} from "@chakra-ui/react";
import petdog from "@assets/petdog.gif";

export default function Petdog() {
  return (
    <Container>
        <Stack>
          <Image
            src={petdog}
            position={"absolute"}
            w={250}
            h={350}
            left={"1550px"}
            top={"670px"}
          />
        </Stack>
      </Container>
  );
}
