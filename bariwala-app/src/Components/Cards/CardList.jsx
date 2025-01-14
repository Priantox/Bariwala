import React from "react";

import Card from "./Card";
import card1 from '../../assets/Cardpic1.jpg';
import card2 from '../../assets/Cardpic2.jpg';
import card3 from '../../assets/Cardpic3.jpg';
import card4 from '../../assets/Cardpic4.jpg';

const properties = [
  {
    image: card1,
    price: "$199,000",
    description: "Land • 0.13 Acre",
    address: "0 S Letitia St, Seattle, WA 98118",
  },
  {
    image: card2,
    price: "$685,000",
    description: "3 Beds • 2 Baths • 1,330 Sq Ft",
    address: "9300 39th Ave S, Seattle, WA 98118",
  },
  {
    image: card3,
    price: "$285,000",
    description: "1 Bath • 429 Sq Ft",
    address: "1420 Terry Ave Unit 205, Seattle, WA 98101",
  },
  {
    image: card4,
    price: "$599,950",
    description: "2 Beds • 1 Bath • 760 Sq Ft",
    address: "6026 41st Ave NE, Seattle, WA 98115",
  },
  {
    image: card4,
    price: "$599,950",
    description: "2 Beds • 1 Bath • 760 Sq Ft",
    address: "6026 41st Ave NE, Seattle, WA 98115",
  },
];

const CardList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 
                    gap-1 p-3">

      {properties.map((property, index) => (
        <Card
          key={index}
          image={property.image}
          price={property.price}
          description={property.description}
          address={property.address}
        />
      ))}
    </div>
  );
};

export default CardList;
