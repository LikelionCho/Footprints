import { Container, Stack, Image} from "@chakra-ui/react";
import squirrel1 from "@assets/squirrel1.gif";
// import squirrel2 from "@assets/squirrel2.gif";
import squirrel3 from "@assets/squirrel3.gif";

export default function Squirrel() {
  return (
    <Container>
        <Stack>
          <Image
            src={squirrel1}
            position={"absolute"}
            w={800}
            h={250}
            left={"350px"}
            bottom={"-450px"}
          />
        </Stack>
        <Stack>
          <Image
            src={squirrel3}
            position={"absolute"}
            w={400}
            h={800}
            left={"2000px"}
            top={"300px"}
          />
        </Stack>
    </Container>
  );
}
