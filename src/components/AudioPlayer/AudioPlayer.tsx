import { songs } from "@/assets/songs/songs";
import { Dispatch, SetStateAction, createContext, useState } from "react";
import { Controls } from "./Controls";
import { SongList } from "./SongList";

export const AudioPlayerContext = createContext<AudioPlayerContextValue>({
    currentSongIndex: -1,
    setCurrentSongIndex: () => null,
});

export const AudioPlayer = () => {
  const [currentSongIndex, setCurrentSongIndex] = useState(-1);

  const currentSong = songs[currentSongIndex];

  return (
    <AudioPlayerContext.Provider value={{ currentSongIndex, setCurrentSongIndex }}>
      <div className="flex h-full flex-col">
        <div className="flex-1 pb-8">
          <SongList songs={songs} />
        </div>
        <div className="mt-auto">
          <Controls
            currentSong={currentSong}
            songCount={songs.length}
            />
      </div>
    </div>
  </AudioPlayerContext.Provider>
);
}

//===================== Types =======================
type AudioPlayerContextValue = {
  currentSongIndex: number;
  setCurrentSongIndex: Dispatch<SetStateAction<number>>;
};