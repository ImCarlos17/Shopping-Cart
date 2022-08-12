import React from "react";
import ButtonShop from "./ButtonShop";

const MainAdvertising = () => {
  return (
    <div className="mainAd container max-w-lg ml-16 h-96 flex flex-col justify-center gap-y-9 px-5 py-5 rounded-lg">
      <h1 className="text-4xl font-semibold text-yellow-800">
        The Best Clothes to dress your Dog
      </h1>
      <section className="text-yellow-700">
        Suspendisse potenti. Donec sed mi lorem. Quisque euismod, tortor non
        commodo malesuada, ante nibh posuere mauris, vitae bibendum augue ipsum
        sed tortor. Quisque sit amet est ac turpis malesuada fermentum.
      </section>
      <ButtonShop />
    </div>
  );
};

export default MainAdvertising;
