import { useEffect, useRef, useState } from "react";

// NOTE How to use:
// TODO Make sure you have a music in the path: /public/audio/loop.mp3
// TODO Make sure to add the CSS props

const BgAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle play/pause on button click
  const toggleAudio = () => {
    setIsPlaying(p => !p);
  };

  // Drive the actual <audio> element
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.play().catch(console.error);
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  // Only fire once on first user click anywhere
  useEffect(() => {
    const onFirstClick = () => {
      setIsPlaying(true);
    };
    window.addEventListener("click", onFirstClick, { once: true });
    return () => window.removeEventListener("click", onFirstClick);
  }, []); // ← mount only

  return (
    <button
      onClick={toggleAudio}
      className="ml-10 flex items-center space-x-1 rounded-full p-2 circle"
    >
      <audio ref={audioRef} loop src="/audio/loop.mp3" className="hidden" />

      <div className="flex items-end space-x-1 h-6">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className={`indicator-line ${isPlaying ? "active" : ""}`}
            style={{ animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </button>
  );
};

export default BgAudio;



