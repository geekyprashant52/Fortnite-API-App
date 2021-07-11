import React from "react";
import { useParams } from "react-router";
import useFetchAPI from "../Custom Hooks/useFetchAPI";
import classes from "./Details.module.css";

export default function Details() {
  //console.log(useParams());
  const { id } = useParams();
  const url = `https://fortnite-api.theapinetwork.com/item/get?id=${id}`;
  const { apiResults, isLoading } = useFetchAPI(url);
  //console.log(apiResults);
  const defaultObj = {
    name: "Default Name",
    cost: "XXXX",
    description: "Default Descripyion",
    type: "default",
    images: {
      background:
        "https://dropin-bucket.mativecdn.com/cosmetics/br/eid_mime/icon.png",
    },
  };
  const { name, cost, description, type, images } = apiResults.item
    ? apiResults.item
    : defaultObj;

  return (
    <div>
      {isLoading ? (
        <h1>Loading.....</h1>
      ) : (
        <div className={classes.detailsCardWrapper}>
          <img src={images.background} alt={name} />
          <div className={classes.detailsInfowrapper}>
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>
              Price: <span className={classes.priceTag}> ${cost}</span>
            </h3>
            <h3>{type}</h3>
          </div>
        </div>
      )}
    </div>
  );
}
