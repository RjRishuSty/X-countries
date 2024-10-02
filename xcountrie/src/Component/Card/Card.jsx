import React, { useEffect, useState } from "react";
import Styles from "./Card.module.css";
import axios from "axios";

export const Card = () => {
  const [cardData, setCardData] = useState([]);

  const fetchApi = async () => {
    try {
      const response = await axios.get(
        `https://xcountries-backend.azurewebsites.net/all`
      );
      setCardData(response.data);
    } catch (error) {
      console.error(`Error fetching data:${error}`);
    }
  };
  //   console.log("CardData", cardData);
  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      {cardData.map((item, index) => {
        return (
          <div className={Styles.card} key={index}>
            <img className={Styles.img} src={item.flag} alt={item.name} />
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </>
  );
};
