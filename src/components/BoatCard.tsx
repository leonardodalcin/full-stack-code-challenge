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
            <h1 className="color-blue">{boat.name} / {boat.year}</h1>
            <div><div className="color-yellow">
              {boat.reviews!.score}
            </div> <div className="color-grey"> Read Reviews</div></div>
            <div className="color-black">Skipper: {boat.skipper}</div>
            <div className="color-black">Cabins: {boat.cabins}</div>
            <div className="color-black">Guests: Up to {boat.guests}</div>
          </div>
          {/*right side*/}
          <div>
            <h1 className="color-blue">€{boat.price}/Day</h1>
            <div className="color-grey">{boat.locality}, {boat.country}</div>
            <div className="color-black">Length: {boat.length}m</div>
            <div className="color-green">Instant booking</div>
            <button className="background-blue color-white">View Details</button>
          </div>
        </div>
      </div>
    )
  } else {
    return null
  }
  
}
