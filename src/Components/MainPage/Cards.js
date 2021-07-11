import React from "react";
import useFetchAPI from "../Custom Hooks/useFetchAPI";
import classes from "./Cards.module.css";
import { Link } from "react-router-dom";

export default function Cards() {
  const url = "https://fortnite-api.theapinetwork.com/store/get";
  const { apiResults, isLoading } = useFetchAPI(url);
  //console.log(apiResults);
  return (
    <div>
      {isLoading ? (
        <h2 className="servicePages">Loading.....</h2>
      ) : (
        <div className={classes.cardsWrapper}>
          {apiResults.map((item, pos) => {
            const { itemId } = item;
            const { name, description, images } = item.item;
            return (
              <div key={pos} className={classes.cards}>
                <Link to={`/details/${itemId}`}>
                  <img src={images.background} alt={name} />
                </Link>
                <div className={classes.infoWrapper}>
                  <h3>{name}</h3>
                  <p>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
