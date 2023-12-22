"use client";

import axios from "axios";
import { useState, useEffect } from "react";

type Music = {
  musicId: string;
  songName: string;
  songArtist: string;
  songLength: string;
};

export default function Home() {
  const [musicLibrary, setMusicLibrary] = useState<Music[]>([]);

  async function fetchMusic() {
    const response = await axios.get("/api/music");
    setMusicLibrary(response.data);
  }

  useEffect(() => {
    fetchMusic();
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen justify-center items-center">
      {musicLibrary.map((music) => (
        <div key={music.musicId}>
          <div>
            {music.songName} -{" "}
            <span className="opacity-50">{music.songArtist}</span>
            <span className="opacity-50 ml-2">({music.songLength})</span>
          </div>
        </div>
      ))}
    </div>
  );
}
