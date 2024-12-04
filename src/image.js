import React from "react";
import product from "./product";

const Image = () => {
  return <img src={product.imageURL} alt={product.name} className="img-fluid" />;
};

export default Image;
