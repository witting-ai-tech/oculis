"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Video, User, ArrowLeft, Search, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import Player from "@/components/player/Player";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { markers, rects, zones } from "@/data/livepage";
import CamOverlay from "./CamOverlay";

const Livepage = ({ data, card, setLive }) => {
  const streamUrl =
    "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

  // const streamUrl =
  //   "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4";

  const [camOverlay, setCamOverlay] = useState(false);

  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    playbackRates: [0.5, 1, 1.25, 1.5, 2],
    sources: [
      {
        src: streamUrl,
        type: "application/x-mpegURL",
        spriteThumbnails: {
          url: "/thumb.jpg",
          width: 160,
          height: 90,
          columns: 10,
          interval: 1,
        },
      },
    ],
    plugins: {
      spriteThumbnails: {
        url: "/thumb.jpg",
        width: 160,
        height: 90,
        columns: 10,
        interval: 1,
      },
    },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    player.on("waiting", () => {
      console.log("Player is waiting");
    });

    player.on("dispose", () => {
      console.log("Player will dispose");
    });
  };

  return (
    <div className="flex-1 w-full h-full">
      {/* top */}
      <div className="mb-4 flex flex-row gap-8">
        <button
          className="flex flex-row items-center gap-[6px] font-semibold text-base text-[#535862]"
          onClick={() => setLive(null)}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <div className="relative w-full max-w-[500px] text-[#717680]">
          <Search
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none"
          />
          <Input
            placeholder="Search"
            className="shadow-input pl-10 pr-3 py-[10px] w-full focus:bg-white ring-0 focus-visible:ring-0 focus:outline-none"
          />
        </div>
        <button
          className="shadow-input w-fit whitespace-nowrap px-3 py-[6px] text-sm flex flex-row gap-[6px] items-center gap-2 text-[#414651] font-medium border border-[#D5D7DA] rounded-[8px]"
          onClick={() => setCamOverlay(true)}
        >
          <Image src="/video-cam.svg" width={20} height={20} alt="video cam" />
          {card.title}
          <ChevronRight size={16} />
        </button>
      </div>

      {/* title */}
      <h4 className="font-semibold text-[24px] text-black mb-3">
        {card.title} {card.zone}
      </h4>

      {/* overlay */}
      {camOverlay && <CamOverlay setCamOverlay={setCamOverlay} card={card} />}

      {/* player */}
      <Player
        options={videoJsOptions}
        onReady={handlePlayerReady}
        markers={markers}
        rects={rects}
      />

      <div
        className="p-5 mt-3 rounded-[12px] border border-[#E9EAEB]"
        style={{ boxShadow: "0 1px 2px 0 rgba(10, 13, 18, 0.05)" }}
      >
        <h4 className="font-semibold text-[20px] text-black">Violation Feed</h4>
        <table className="mt-3 w-full border-collapse">
          <tbody className="text-sm">
            {data.map((item, index) => (
              <tr
                key={index}
                className="border font-medium border-[#E9EAEB] rounded-[8px] bg-[#FDFDFD]"
              >
                <td className="flex flex-row items-center gap-3 py-4 px-8 text-[#252B37] font-semibold min-w-[120px]">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h2>{item.name}</h2>
                    <p className="text-[#535862] font-medium">ID {item.id}</p>
                  </div>
                </td>
                <td className="py-4 px-8 text-[#535862]">{item.incident}</td>
                <td className="py-4 px-8 text-[#535862]">{item.time}</td>
                <td
                  className={`py-4 px-8 ${
                    item.risk === "Low Risk"
                      ? "text-[#F79009]"
                      : item.risk === "Medium Risk"
                      ? "text-[#DC6803]"
                      : "text-[#B42318]"
                  }`}
                >
                  {item.risk}
                </td>
                <td>
                  <button className="px-3 py-2 border border-[#D5D7DA]  rounded-[8px]">
                    <User size={16} className="text-[#535862]" />
                  </button>
                  <button className="ml-4 px-3 py-2 bg-[#7D48DF] rounded-[8px] border-2">
                    <Image
                      src="/CircleCheck.svg"
                      alt="Circle Check"
                      height={16}
                      width={16}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Livepage;
