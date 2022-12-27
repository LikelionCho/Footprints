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
            w={700}
            h={200}
            left={"150px"}
            bottom={"-400px"}
          />
        </Stack>
        <Stack>
          <Image
            src={squirrel3}
            position={"absolute"}
            w={400}
            h={800}
            left={"1500px"}
            top={"200px"}
          />
        </Stack>
    </Container>
  );
}
