import { Container, Stack, Image,Link} from "@chakra-ui/react";
import logo1 from "@assets/logo2.png";

export default function Logo() {
  return (
    <Container>
        <Stack>
          <Image
            src={logo1}
            position={"absolute"}
            w={7}
            h={7}
            left={"1250px"}
            top={"43px"}
          />
          {/* 깃발안 로고 */}
        </Stack>
        <Stack>
          <Link
            href={
              "https://flaxen-sauce-7a0.notion.site/Footprint-23bd2d85a0014e63a393e8698b10dc18"
            }
            target="_blank"
          >
            <Image
              src={logo1}
              position={"absolute"}
              w={200}
              h={200}
              right={"-10px"}
              top={"-100px"}
            />
            {/* 우측 상단 로고 */}
          </Link>
        </Stack>
      </Container>
  );
}
