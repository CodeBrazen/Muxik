import React from "react";
import { useMusicContext } from "../Context/MusicContext";
import { usePlayerContext } from "../Context/PlayerContext";

import { motion } from "framer-motion";
import {
  LoadingSpinner,
  TrendingAlbums,
  Albums,
  TopCharts,
  TopPlaylists,
} from "../components";

const Mains = () => {
  const { homeDataLoading: loading } = useMusicContext();
  if (loading) {
    return (
      <div className="text-2xl font-bold fixed inset-0 w-full h-full flex place-items-center justify-center bg-[#2d1b69] -z-20 max-md:pr-0 pr-32 md:translate-x-1/4 md:pr-48 lg:translate-x-0">
        <LoadingSpinner size={80} />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { ease: "easeInOut" } }}
      exit={{ x: "-100vw", transition: { ease: "easeInOut" } }}
      className={"bg-[#2d1b69] pl-10 pr-4 max-md:pl-4 overflow-y-hidden pb-24 "}
    >
      <section className="w-full my-6 ">
        <h1 className="font-bold text-3xl  w-fit text-darkTitle my-4">
          Trending
        </h1>
        <TrendingAlbums />
      </section>
      <section className="w-full my-6">
        <h1 className="font-bold text-3xl w-fit text-darkTitle my-4">
          Latest Releases
        </h1>
        <Albums />
      </section>
      <section>
        <h1 className="font-bold text-3xl w-fit text-darkTitle my-4">
          Top Charts
        </h1>
        <TopCharts />
      </section>
      <section>
        <h1 className="font-bold text-3xl w-fit text-darkTitle my-4">
          Top Playlist
        </h1>
        <TopPlaylists />
      </section>
    </motion.div>
  );
};

export default Mains;
