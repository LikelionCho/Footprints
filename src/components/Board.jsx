import { Container, Stack, Image, Link, Text } from "@chakra-ui/react";
import board5 from "@assets/board5.png";
import board7 from "@assets/board7.png";
import board6 from "@assets/board6.png";
import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";

export default function Board5() {
  return (
    <Container>
      <Stack>
        <Image
          src={board5}
          position={"absolute"}
          w={250}
          h={300}
          left={"10px"}
          bottom={"-580px"}
        />
        {/* 추억앨범 보더 */}
        <Link
          href={
            "https://www.notion.so/eb5cf54aa96f485b8f20a2b98a087ec1?v=e5da9d6e2d44499fabb1240210be3b76"
          }
          target="_blank"
        >
          {/* 추억앨범 링크 */}
          <Text
            rounded={"full"}
            color={"black"}
            fontWeight={200}
            fontSize={{ base: "3xl", sm: "1xl", md: "1xl" }}
            px={15}
            _hover={{ bg: "purple.600" }}
            position={"absolute"}
            left={"60px"}
            bottom={"-550px"}
          >
            추억 앨범
          </Text>
          {/* 추억앨범 문구 */}
        </Link>
      </Stack>

      <Stack>
        <Image
          src={board5}
          position={"absolute"}
          w={250}
          h={300}
          left={"10px"}
          bottom={"-425px"}
        />
        {/* 발자국이란 보더 */}
        <Link
          href={
            "https://flaxen-sauce-7a0.notion.site/Footprint-23bd2d85a0014e63a393e8698b10dc18"
          }
          target="_blank"
        >
          {/* 발자국이란 링크 */}
          <Text
            rounded={"full"}
            color={"black"}
            fontWeight={200}
            fontSize={{ base: "3xl", sm: "1xl", md: "1xl" }}
            px={15}
            _hover={{ bg: "purple.600" }}
            position={"absolute"}
            left={"50px"}
            bottom={"-400px"}
          >
            발자국이란?
          </Text>
          {/* 발자국이란 문구 */}
        </Link>
      </Stack>

      <Stack>
        <Image
          src={board7}
          position={"absolute"}
          w={150}
          h={150}
          left={"680px"}
          top={"450px"}
        />
        {/* 발자국 가는길 표지판 */}
        <Link href={"https://www.youtube.com/@balltagu"} target="_blank">
          <Text
            rounded={"full"}
            px={5}
            _hover={{ bg: "purple.600" }}
            position={"absolute"}
            left={"685px"}
            top={"490px"}
          >
            발자국 가는 길
          </Text>
          {/* 발자국 가는길 문구 */}
        </Link>
      </Stack>
      <Stack>
        <Image
          src={board6}
          position={"absolute"}
          w={685}
          h={685}
          right={"180px"}
          bottom={"-600px"}
        />
        <Box w={400} p={4} color="blue" zIndex={"999"} pos={"absolute"} right={"306px"}
          bottom={"-600px"}>
          <ImageSlider slides={SlideData} />
        </Box>
      </Stack>
    </Container>
  );
}
