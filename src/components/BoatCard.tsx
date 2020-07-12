import React from "react";
import "./BoatCard.css";
import { useGetBoatCardQuery } from "../generated/graphql";

export default function BoatCard() {
  const { data } = useGetBoatCardQuery();
  if (data?.getBoats[0]) {
    return (
      <div className="BoatCard-grid">
        <div>{data.getBoats[0].imageUrl}</div>
        <div>{data.getBoats[0].id}}</div>
      </div>
    )
  } else {
    return null
  }
  
}
