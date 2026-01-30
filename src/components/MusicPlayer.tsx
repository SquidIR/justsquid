import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';

interface MusicPlayerProps {
  title: string;
  audioSrc: string;
}

const MusicPlayer = ({ title, audioSrc }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
      setCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setProgress(0);
      setCurrentTime(0);
    };

    audio.addEventListener('timeupdate', updateProgress);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateProgress);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const clickPosition = (e.clientX - rect.left) / rect.width;
    audio.currentTime = clickPosition * audio.duration;
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="card-geometric group hover:glow-red transition-all duration-500">
      <audio ref={audioRef} src={audioSrc} preload="metadata" />
      
      {/* Visualizer bars */}
      <div className="flex items-end justify-center gap-1 h-24 mb-6">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className={`w-2 bg-primary rounded-t transition-all duration-150 ${
              isPlaying ? 'music-bar' : ''
            }`}
            style={{
              height: isPlaying ? `${Math.random() * 80 + 20}%` : '20%',
              animationDelay: `${i * 0.05}s`,
              opacity: isPlaying ? 1 : 0.3,
            }}
          />
        ))}
      </div>

      {/* Track info */}
      <h3 className="font-heading text-xl text-foreground mb-4 text-center">{title}</h3>

      {/* Progress bar */}
      <div
        className="w-full h-2 bg-secondary rounded-full cursor-pointer mb-4 overflow-hidden"
        onClick={handleProgressClick}
      >
        <div
          className="h-full bg-primary transition-all duration-100 rounded-full relative"
          style={{ width: `${progress}%` }}
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-foreground rounded-full shadow-lg" />
        </div>
      </div>

      {/* Time display */}
      <div className="flex justify-between text-sm text-muted-foreground mb-6 font-body">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-6">
        <button
          onClick={toggleMute}
          className="p-3 text-muted-foreground hover:text-primary transition-colors"
        >
          {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
        </button>
        
        <button
          onClick={togglePlay}
          className="w-16 h-16 rounded-full bg-primary flex items-center justify-center hover:scale-110 transition-all duration-300 glow-red"
        >
          {isPlaying ? (
            <Pause size={28} className="text-primary-foreground" />
          ) : (
            <Play size={28} className="text-primary-foreground ml-1" />
          )}
        </button>

        <div className="w-12" /> {/* Spacer for alignment */}
      </div>
    </div>
  );
};

export default MusicPlayer;
