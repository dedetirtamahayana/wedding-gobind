import React from "react";
import Header from "@/components/Header/Header";
import Banner from "@/components/Banner/Banner";
import Groom from "@/components/Groom/Groom";
import Gallery from "@/components/Gallery/Gallery";
import Doa from "@/components/Doa/Doa";
import Rsvp from "@/components/RSVP/Rsvp";
import Map from "@/components/Map/Map";
const index = () => {
  return (
    <>
      <Header />
      <Banner />
      <Groom />
      <Gallery />
      <Doa />
      <Rsvp />
      <Map />
    </>
  );
};

export default index;
