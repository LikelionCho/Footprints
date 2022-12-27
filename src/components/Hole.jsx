import { Container, Stack, Image,Link} from "@chakra-ui/react";
import hole from "@assets/hole1.png";
import hole2reverse from "@assets/hole2reverse.png";


export default function Hole() {
  return (
    <Container>
        <Stack>
          <Image
            src={hole}
            position={"absolute"}
            w={180}
            h={200}
            right={"1000px"}
            bottom={"-420px"}
          />
         {/* 발자국가는길 아래 굴 */}
        </Stack>
        <Stack>
          <Link href={"https://twitter.com/with_my_friend"} target="_blank">
            {/* hole change */}
            <Image
              src={hole2reverse}
              position={"absolute"}
              w={350}
              h={350}
              left={"300px"}
              bottom={"-600px"}
            />
          </Link>
        </Stack>
      </Container>
  );
}
