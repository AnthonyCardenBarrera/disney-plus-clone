import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    movies: []
}

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers:{
        //action to setMovies in the inital state
        setMovies: (state, action) =>{
            state.movies = action.payload;
        }
    }
})

//exporting the action so we can dispatch it
export const {setMovies} = movieSlice.actions;

//exporting the movie state
export const selectMovies = (state) => state.movie.movies;

//export the reducer
export default movieSlice.reducer;