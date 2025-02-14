

import React, { useRef, useState } from "react";
import audio from "../assets/soothingMusic.mp3";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-[20px] z-50 bg-[#30d464] rounded-full px-[13px] pt-[10px] pb-[7px]  left-[2px] lg:left-[20px] ">
       <button aria-label="Play Video" onClick={togglePlay}>
        {isPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height={'15px'} width={'15px'} fill="#000">
            <path d="M48 64C21.5 64 0 85.5 0 112L0 400c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48L48 64zm192 0c-26.5 0-48 21.5-48 48l0 288c0 26.5 21.5 48 48 48l32 0c26.5 0 48-21.5 48-48l0-288c0-26.5-21.5-48-48-48l-32 0z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width={'15px'} height={'15px'} viewBox="0 0 384 512">
            <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80L0 432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
          </svg>
        )}
      </button>
      <audio
        ref={audioRef}
        src={audio}
        loop
        volume={1}
        style={{ display: "none" }}
      >
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default BackgroundMusic;
