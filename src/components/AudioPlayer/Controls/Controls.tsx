import { Disc3, Pause, Play, SkipBack, SkipForwardIcon } from "lucide-react";
import * as React from "react";
import { useContext, useEffect, useRef, useState } from "react";
import { AudioPlayerContext } from "..";
import { Button } from "../../ui/button";
import { AudioProgressBar } from "./AudioProgressBar";

function formatDurationDisplay(duration: number) {
  const min = Math.floor(duration / 60);
  const sec = Math.floor(duration - min * 60);

  const formatted = [min, sec].map((n) => (n < 10 ? "0" + n : n)).join(":");

  return formatted;
}

interface ControlsProps {
  currentSong?: { title: string; src: string };
  songCount: number;
}

export const Controls = ({ currentSong, songCount }: ControlsProps) => {
  const context = useContext(AudioPlayerContext);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isReady, setIsReady] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentProgress, setCurrentProgress] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(0.2);
  const [isPlaying, setIsPlaying] = useState(false);

  const durationDisplay = formatDurationDisplay(duration);
  const elapsedDisplay = formatDurationDisplay(currentProgress);

  useEffect(() => {
    audioRef.current?.pause();
    resetForNewSong();

    const timeout = setTimeout(() => {
      audioRef.current?.load();
      audioRef.current?.play();
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [context.currentSongIndex]);

  const resetForNewSong = () => {
    setDuration(0);
    setCurrentProgress(0);
    setBuffered(0);
    setIsReady(false);
  };

  const handleNext = () => {
    context.setCurrentSongIndex((prevValue) => prevValue + 1);
    resetForNewSong();
  };

  const handlePrev = () => {
    context.setCurrentSongIndex((prevValue) => prevValue - 1);
    resetForNewSong();
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play();
      setIsPlaying(true);
    }
  };

  const handleBufferProgress: React.ReactEventHandler<HTMLAudioElement> = (
    e
  ) => {
    const audio = e.currentTarget;
    const dur = audio.duration;
    if (dur > 0) {
      for (let i = 0; i < audio.buffered.length; i++) {
        if (
          audio.buffered.start(audio.buffered.length - 1 - i) <
          audio.currentTime
        ) {
          const bufferedLength = audio.buffered.end(
            audio.buffered.length - 1 - i
          );
          setBuffered(bufferedLength);
          break;
        }
      }
    }
  };

  return (
    <div className="relative p-3">
      {currentSong && (
        <audio
          ref={audioRef}
          preload="metadata"
          onDurationChange={(e) => setDuration(e.currentTarget.duration)}
          onPlaying={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={handleNext}
          onCanPlay={(e) => {
            e.currentTarget.volume = volume;
            setIsReady(true);
          }}
          onTimeUpdate={(e) => {
            setCurrentProgress(e.currentTarget.currentTime);
            handleBufferProgress(e);
          }}
          onProgress={handleBufferProgress}
          onVolumeChange={(e) => setVolume(e.currentTarget.volume)}
        >
          <source type="audio/x-m4a" src={currentSong.src} />
          <source type="audio/mp3" src={currentSong.src} />
        </audio>
      )}
      <AudioProgressBar
        duration={duration}
        currentProgress={currentProgress}
        buffered={buffered}
        onChange={(e) => {
          if (!audioRef.current) return;

          audioRef.current.currentTime = e.currentTarget.valueAsNumber;

          setCurrentProgress(e.currentTarget.valueAsNumber);
        }}
      />
      <span className="flex justify-between text-[8px]">
        <p>{elapsedDisplay}</p>
        <p>{durationDisplay}</p>
      </span>

      <div className="flex flex-col items-center justify-center">
        <div className="mb-1 text-center">
          <p className="font-bold">{currentSong?.title ?? "Select a song"}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center gap-4">
        <Button
          size="icon"
          onClick={handlePrev}
          disabled={context.currentSongIndex === 0}
        >
          <SkipBack size={24} />
        </Button>
        <Button disabled={!isReady} onClick={togglePlayPause} size="icon">
          {!isReady && currentSong ? (
            <Disc3 size={24} className="animate-spin" />
          ) : isPlaying ? (
            <Pause size={30} />
          ) : (
            <Play size={30} />
          )}
        </Button>
        <Button
          size="icon"
          onClick={handleNext}
          disabled={context.currentSongIndex === songCount - 1}
        >
          <SkipForwardIcon size={24} />
        </Button>
      </div>
    </div>
  );
};
