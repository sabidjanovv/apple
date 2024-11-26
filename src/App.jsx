import React from "react";
import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Cards from "./components/card/Cards";

function App() {
  const cardData = [
    {
      imageUrl:
        "https://www.apple.com/v/home/bv/images/promos/airpods-4/promo_airpods_4_avail__bl22kvpg6ez6_large_2x.jpg",
      title: "AirPods 4",
      description:
        "Iconic. Now supersonic. Available with Active Noise Cancellation.",
      buttons: ["Learn more", "Buy"],
      pcl: "#fff", // Title color (white)
      cl: "#0071e3", // Button color (blue)
    },
    {
      imageUrl:
        "https://www.apple.com/v/home/bv/images/promos/apple-watch-series-10/promo_apple_watch_series_10_avail_lte__c70y29goir42_large_2x.jpg",
      title: "Apple Watch Series 10",
      description: "Thinnest classic.",
      buttons: ["Learn more", "Buy"],
      pcl: "#fff", // Title color (white)
      cl: "#0071e3", // Button color (blue)
    },
    {
      imageUrl:
        "https://www.apple.com/v/home/bv/images/promos/macbook-air-m3/promo_macbook_air_m3__e43jegok3wuq_medium.jpg",
      title: "MacBook Air",
      description: "Lean. Mean. M3 machine.",
      buttons: ["Learn more", "Buy"],
      pcl: "#fff", // Title color (white)
      cl: "#0071e3", // Button color (blue)
    },
    {
      imageUrl:
        "https://www.apple.com/v/home/bv/images/promos/airpods-pro-2/promo_airpods_pro_2_avail__vkitqi3okwie_medium.jpg",
      title: "AirPods Pro 2",
      description:
        "Hearing Test, Hearing Aid, and Hearing Protection features in a free software update.",
      buttons: ["Learn more", "Buy"],
      pcl: "#fff", // Title color (white)
      cl: "#0071e3", // Button color (blue)
    },
    {
      imageUrl:
        "https://www.apple.com/v/home/bv/images/promos/carriers/promo_carrier__e0izvxwqosgi_medium_2x.jpg",
      title: "Carrier deals at Apple",
      description:
        "Get up to $1000 in credit on a new iPhone. Trade-in may be required.",
      buttons: ["Find your deal"],
      pcl: "#fff", // Title color (white)
      cl: "#0071e3", // Button color (blue)
    },
    {
      imageUrl:
        "https://www.apple.com/v/home/bv/images/promos/iphone-tradein/promo_iphone_tradein__bugw15ka691e_medium_2x.jpg",
      title: "Trade In",
      description:
        "Get $180–$650 in credit when you trade in iPhone 12 or higher.",
      buttons: ["Get your estimate"],
      pcl: "#fff", // Title color (white)
      cl: "#0071e3", // Button color (blue)
    },
  ];

  return (
    <div>
      <Header />
      <Hero
        pcl="#fff"
        cl="#0071e3"
        title={"iPhone 16 Pro"}
        titleUrl="https://www.apple.com/iphone-16-pro"
        desc={"Hello, Apple Intelligence"}
        url="https://www.apple.com/v/home/bv/images/heroes/iphone-16-pro/hero_iphone16pro_avail__fnf0f9x70jiy_largetall_2x.jpg"
        buttons={["Learn more", "Buy"]}
        btn_bg="blue"
      />
      <Hero
        pcl="#fff"
        cl="#fff"
        title={"iPhone 16"}
        titleUrl="https://www.apple.com/iphone-16"
        desc={"Hello, Apple Intelligence"}
        url="https://www.apple.com/v/home/bv/images/heroes/iphone-16/hero_iphone16_avail__euwzls69btea_largetall_2x.jpg"
        buttons={["Learn more", "Buy"]}
        btn_bg="white"
      />
      <Hero
        pcl="#000"
        cl="#0071e3"
        title={"iPad Air"}
        desc={"Two sizes. Faster chip. Does it all."}
        url="https://www.apple.com/v/home/bv/images/heroes/ipad-air/hero_ipad_air__enn6321t3tkm_largetall_2x.jpg"
        buttons={["Learn more", "Buy"]}
        btn_bg="blue"
      />
      <Cards cards={cardData} />
    </div>
  );
}

export default App;
