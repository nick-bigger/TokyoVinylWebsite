import { ComponentPropsWithoutRef } from "react";

interface ProgressCSSProps extends React.CSSProperties {
  '--progress-width': number;
  '--buffered-width': number;
}

interface AudioProgressBarProps
  extends ComponentPropsWithoutRef<'input'> {
    buffered: number;
    currentProgress: number;
    duration: number;
}

export const AudioProgressBar = ({ duration, currentProgress, buffered }: AudioProgressBarProps) => {
  const progressBarWidth = isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration;
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;

  const progressStyles: ProgressCSSProps = {
    '--progress-width': progressBarWidth,
    '--buffered-width': bufferedWidth,
  };

  return (
    <div className="group absolute inset-x-0 top-[-4px] h-1">
      <input
        type="range"
        name="progress"
        className={`absolute inset-0 m-0 h-full w-full cursor-pointer appearance-none bg-transparent transition-all before:absolute before:inset-0 before:h-full before:w-full before:origin-left before:bg-primary after:absolute after:h-full after:w-full after:bg-primary/50 hover:bg-primary group-hover:h-2 dark:bg-gray-700`}
        style={progressStyles}
        min={0}
        max={duration}
        value={currentProgress}
      />
    </div>
  );
}
