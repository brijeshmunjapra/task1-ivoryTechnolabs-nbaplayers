import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchAsyncPlayers = createAsyncThunk('players/fetchAsyncPlayers',async ()=>{
    const fetchPlayers = {
        method: 'GET',
        url: 'https://free-nba.p.rapidapi.com/players',
        params: {page: '0', per_page: '25'},
        headers: {
          'X-RapidAPI-Key': '590bee806cmsh68df35f26db9b04p1cb438jsn17872e05d345',
          'X-RapidAPI-Host': 'free-nba.p.rapidapi.com'
        }
      };
      
     return (axios.request(fetchPlayers).then(function (response) {
        console.log(response.data);
        return response.data;
      }))
})

export const playerSlice = createSlice({
    name : "players",
    initialState: {
     players : {}
    },
    reducers:{
        addPlayers: (state, action)=>{
           state.players = action.payload;
        }   
    },
    extraReducers:{
        [fetchAsyncPlayers.pending]: () =>{
         console.log("pending")
        },
        [fetchAsyncPlayers.fulfilled]: (state, action) =>{
            console.log("fetched successful")
         return {...state, players: action.payload}
        },
        [fetchAsyncPlayers.rejected]: () =>{
           console.log("Rejected")
        }
    }
});

export const { addPlayers } = playerSlice.actions


export default playerSlice.reducer