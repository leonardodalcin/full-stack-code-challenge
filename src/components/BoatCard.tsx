import React from "react";
import "./BoatCard.css";
import { useGetBoatsQuery } from "../generated/graphql";

export default function BoatCard() {
  const { loading, error, data } = useGetBoatsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(, {JSON.stringify(error)}</p>;
  if (data) return <p>data :), {JSON.stringify(data)}</p>;

  return (
    <div className="BoatCard-grid">
      <div>BoatPhoto</div>
      <div>BoatInfo</div>
    </div>
  );
}
