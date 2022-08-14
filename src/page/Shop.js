import React from "react";
import Card from "../component/Card";
import products from "../util/products";

const Shop = () => {
  return (
    <div className=" grid gap-4 grid-cols-3 grid-rows-4 px-2.5 py-12 gap-y-32">
      {products.map((product) => (
        <Card
          title={product.name}
          price={product.price}
          img={product.img}
          key={product.id}
        />
      ))}
    </div>
  );
};

export default Shop;
