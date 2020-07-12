import React from "react";
import "./BoatCard.css";
import { useGetBoatCardQuery } from "../generated/graphql";

export default function BoatCard() {
  const { data } = useGetBoatCardQuery();
  if (data?.getBoats[0]) {
    const boat = data?.getBoats[0]
    return (
      <div className="BoatCard-grid">
        <div style={{backgroundImage: `url(${boat.imageUrl})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        height:"100%"}}></div>
        <div className={'Info-grid'}>
          {/*left side*/}
          <div>
            <div>{boat.name} / {boat.year}</div>
            <div>{boat.reviews!.score} / Read Reviews</div>
            <div>Skipper: {boat.skipper}</div>
            <div>Cabins: {boat.cabins}</div>
            <div>Guests: Up to {boat.guests}</div>
          </div>
          {/*right side*/}
          <div>
            <div>€{boat.price}/Day</div>
            <div>{boat.locality}, {boat.country}</div>
            <div>Length: {boat.length}m</div>
            <div>Instant booking</div>
            <div>View Details</div>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
  
}
