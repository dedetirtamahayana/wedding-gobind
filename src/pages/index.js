import React, { useState, useEffect } from "react";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Groom from "@/components/Groom/Groom";
import Gallery from "@/components/Gallery/Gallery";
import Doa from "@/components/Doa/Doa";
import Rsvp from "@/components/RSVP/Rsvp";
import Map from "@/components/Map/Map";
import Footer from "@/components/Footer/Footer";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Fungsi untuk mengontrol pemutaran audio
  const toggleAudio = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    // Logika untuk memulai atau menghentikan audio
    const audioElement = document.getElementById("myAudio"); // Ganti "myAudio" dengan ID audio Anda

    if (isPlaying) {
      audioElement.play(); // Mulai pemutaran audio
    } else {
      audioElement.pause(); // Hentikan pemutaran audio
      audioElement.currentTime = 0; // Kembali ke awal audio
    }
  }, [isPlaying]);

  return (
    <div className='relative'>
      <div className='fixed  bottom-96 right-0 mt-4 mr-4 z-50'>
        <button
          onClick={toggleAudio}
          className='w-12 h-12 bg-biru text-gold hover:bg-gold hover:text-white rounded-full flex items-center justify-center'
        >
          {isPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
        </button>
      </div>

      <div className=''>
        <Header />
        <Banner />
        <Groom />
        <Gallery />
        <Doa />
        <Rsvp />
        <Map />
        <Footer />
      </div>

      {/* Audio element yang tersembunyi */}
      <audio id='myAudio' hidden>
        <source src='/lagu.mp3' type='audio/mpeg' />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Index;
