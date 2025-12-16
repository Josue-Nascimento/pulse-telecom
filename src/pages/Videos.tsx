import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Videos() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const videoRefs = useRef<HTMLVideoElement[]>([]);

  const handleVideoEnd = () => {
    setCurrentVideo((prev) => (prev === 0 ? 1 : 0));
  };

  // controla play / reset corretamente
  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === currentVideo) {
        video.currentTime = 0;
        video.play();
      } else {
        video.pause();
      }
    });
  }, [currentVideo]);

  return (
    <Container>
      <Slider $index={currentVideo}>
        <Video
          ref={(el) => (videoRefs.current[0] = el!)}
          src="/Vídeo inicial.mp4"
          muted
          playsInline
          onEnded={handleVideoEnd}
        />

        <Video
          ref={(el) => (videoRefs.current[1] = el!)}
          src="/Home Office.mp4"
          muted
          playsInline
          onEnded={handleVideoEnd}
        />
      </Slider>
    </Container>
  );
}


const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

const Slider = styled.div<{ $index: number }>`
  display: flex;
  width: 200%;
  height: 100%;
  transform: translateX(${(props) => props.$index * -50}%);
  transition: transform 0.8s ease-in-out;
`;

const Video = styled.video`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
