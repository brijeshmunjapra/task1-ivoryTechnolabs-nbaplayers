import React from "react";
import { Link } from "react-router-dom";
import PlayerInfo from "./PlayerInfo";


function Playename(props) {
  const { data } = props;
  const playerID = data.id;
   console.log(playerID);
  return (
    <>
      <Link to={`/${data.id}`}>
        <div className="playername">{data.first_name},{data.id}</div>
        <hr />
      </Link>
    </>
  );
}

export default Playename;
