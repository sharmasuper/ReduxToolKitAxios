import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import moviApi, { baseURL } from "../../common/moviApi";
import { APIkey } from "../../common/MoviApiKey";

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async()=>{ 
    const movieText = "Harry"
    const Response = await moviApi.get(
        `&apikey=${APIkey}&s=${movieText}&type=movie`
      )  
      
    //   .catch((err)=>{
    //    console.log("err",err)
    //   })
      // console.log("The response from Api",Response) 
        // dispatch(addMovies(Response.data))
        return Response.data
})

export const fetchAsyncShows = createAsyncThunk("Series/fetchAsyncShows",async()=>{
    const seriesText = "Friend";
    const response = await moviApi .get(`&apikey=${APIkey}&s=${seriesText}&type=series`);
    return response.data
})

export const fetchAsyncMoviesorShowDetail = createAsyncThunk("fetchAsyncMoviesorShowDetail",async(id)=>{
    console.log("id",id)
        const series = true

        const response = await baseURL.get(`?i=${id}&apiKey=${APIkey}&plot=full`)
        return response.data
    
})


const MovieSlice = createSlice({
    name :"movies",
    initialState :{
        movies:[],  //we can also used object as array
        shows:[],
        getSelectedMoviesorShow :[]
    },
        reducers :{
            // addMovies : (state,action)=>{
            //     state.movies = action.payload;
            //   //  state.shows = action.payload

            // },
            RemoveSelectedMovieOrShow : (state,action) =>{
                state.getSelectedMoviesorShow = {};
            }
        },
        // extraReducers : {
        //     [fetchAsyncMovies.pending] : () =>{
        //         console.log("pending")
        //     },
        //     [fetchAsyncMovies.fulfilled] :(state,{payload}) =>{
        //         console.log("fetched Succcessfully")
        //         return {...state,movies :payload}
        //     },
        //     [fetchAsyncMovies.rejected] :() =>{
        //         console.log("Reajected");
        //     }
        // }
        extraReducers :(builder)=>{
            builder.addCase(fetchAsyncMovies.pending,(state,action)=>{
             console.log("pebding")
            })
     
       builder.addCase(fetchAsyncMovies.fulfilled,(state,action)=>{
             state.movies = action.payload
       })
       builder.addCase(fetchAsyncMovies.rejected,(state,action)=>{
           console.log('error',action.payload)
       })
       builder.addCase(fetchAsyncShows.fulfilled,(state,action)=>{
        state.shows = action.payload
     })
     builder.addCase(fetchAsyncMoviesorShowDetail.fulfilled,(state,action)=>{
     state.getSelectedMoviesorShow = action.payload
    //return {...state,shows:action.payload}
   })   
   }                
})
// export const {addMovies} = MovieSlice.actions
export const {RemoveSelectedMovieOrShow} = MovieSlice.actions
export const getAllMovies = (state) =>state.Movies.movies
export const getAllShows = (state) => state.Movies.shows
export const getSelectedMoviesorShow = (state) =>state.Movies.getSelectedMoviesorShow
export default MovieSlice.reducer






