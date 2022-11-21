import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayers } from "../features/playerSlice";

import { fetchAsyncPlayers } from "../features/playerSlice";
import { Link } from "react-router-dom";

function PlayerList() {
  const [isHovering, setIsHovering] = useState(false);
  const [select, setSelect] = useState(0);

  const dispatch = useDispatch();
  const players = useSelector(addPlayers);

  let dataArray = players?.payload?.players?.players?.data;

  useEffect(() => {
    !dataArray && dispatch(fetchAsyncPlayers());
  }, []);

  const hoverRef = useRef(null);

  useEffect(() => {
    console.log("select", select);
  }, [select]);

  const handleMouseOver = (event, index) => {
    setIsHovering(true);
    setSelect(index);
    console.log(index, "index");
  };

  const handleMouseOut = (index) => {
    setIsHovering(false);
  };

  return (
    <div>
      <div>
        <h1>Players List</h1>
        <hr />
      </div>
      {dataArray &&
        dataArray.map((player, index) => (
          <div
            key={index}
            onMouseOver={(event) => handleMouseOver(event, index)}
            onMouseOut={handleMouseOut}
            ref={hoverRef}  
          >
            {/* {}.. .. */}
            {/* {isHover ? <>ffsdfgf</> : player.first_name} */}
            { select === index && isHovering? <h2>{player.first_name + " " + player.last_name}</h2> : <h2>{player.first_name}</h2>}

            <Link to={`/${player.id}`}>
              <button>Details</button>
            </Link>

            <hr />
          </div>
        ))}

      <div></div>
    </div>
  );
}

export default PlayerList;
