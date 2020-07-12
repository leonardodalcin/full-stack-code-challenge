import React from "react";
import "./BoatCard.css";
import { useGetBoatCardQuery } from "../generated/graphql";

export default function BoatCard() {
  const { data } = useGetBoatCardQuery();
  if (data?.getBoats[0]) {
    const boat = data?.getBoats[0]
    return (
      <div className="BoatCard-grid">
        <img src={boat.imageUrl!} alt="Boat"></img>
        <div>{boat.id}</div>
      </div>
    )
  } else {
    return null
  }
  
}
