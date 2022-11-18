import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPlayers } from "../features/playerSlice";
import Playename from "./Playename";
import { fetchAsyncPlayers } from '../features/playerSlice';

function PlayerList() {
  const dispatch = useDispatch();
    const players = useSelector(addPlayers);
  

  useEffect(()=>{
    
   dispatch(fetchAsyncPlayers())
  
  }, [dispatch]);

  let dataArray = players?.payload?.players?.players?.data;


  return (
    <div>
      <div>
        <h1>Players List</h1>
        <hr/>
      </div>
      {dataArray &&
        dataArray.map((player, index) => (
          <Playename key={index} data={player}/>
        ))}
    </div>
  );
}

export default PlayerList;
