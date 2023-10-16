import { Pause, Play } from "lucide-react";
import { useContext } from "react";
import { AudioPlayerContext } from "../AudioPlayer";

export const SongList = ({ songs }: SongListProps) => {
  const context = useContext(AudioPlayerContext);

    return <ul>
      {songs.map((song, index) => (
        <li key={song.title} className="mb-1">
          <button
            onClick={() => context.setCurrentSongIndex(index)}
            className={`flex w-full items-center gap-5 rounded border-2 px-3 py-4 ${
              context.currentSongIndex === index
                ? 'bg-primary text-white'
                : ' hover:bg-primary hover:text-white'
            }`}
          >
            <span className="text-sm">
              {index + 1 < 10 ? '0' + (index + 1) : index + 1}
            </span>
            <h2 className="flex-1">{song.title}</h2>
            <span>
            {index === context.currentSongIndex ? (
              <Pause size={20} />
            ) : (
              <Play size={20} />
            )}
            </span>
          </button>
        </li>
      ))}
  </ul>
};

//===================== Props =======================
type Song = {
  title: string;
};

type SongListProps = {
  songs: Song[];
};