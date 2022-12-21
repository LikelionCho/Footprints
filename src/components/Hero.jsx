import { Container, Stack } from "@chakra-ui/react";
import Twitter2 from "@components/Twitter2";
import background from "@assets/backgroundimage.png";
import Fp2 from "@components/Fp2";
import Logo from "@components/Logo";
import Hole from "@components/Hole";
import Board from "@components/Board";
import Entry from "@components/Entry";
// import letter from "@assets/letter.png";
import ImageChange from "@components/ImageChange";
import Squirrel from "@components/Squirrel";
// import music from "@assets/Didyouknow.mp3";
import Petdog from "@components/Petdog";
import music2 from "@assets/hiding.mp3";
import Rabbit from "@components/Rabbit";

export default function main() {
  return (
    <Container
      bgImage={`url(${background})`}
      maxW={"9xl"}
      h={"1270px"}
      w={"2500px"}
      bgPosition={"50% 50%"}
      bgSize={"cover"}
    >
      {" "}
      {/* 배경화면 */}
      <audio controls autoplay src={music2}>
        audio
      </audio>
      {/* 배경음악 */}
      <Stack
        textAlign={"center"}
        align={"center"}
        position={"relative"}
        text-align={"center"}
        image-align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Stack>
          <Twitter2></Twitter2>
          <Fp2></Fp2>
          <Logo></Logo>
          <Hole></Hole>
          <Board></Board>
          <Entry></Entry>
          <Squirrel></Squirrel>
          <Rabbit></Rabbit>
          <ImageChange></ImageChange>
          <Petdog></Petdog>
        </Stack>
      </Stack>
    </Container>
  );
}
