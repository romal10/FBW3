import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
ReactDOM.render(
<Provider store= {createStore(reducers)}>
   <App/>
</Provider>
, document.getElementById('root'));
//reducers/index.js----------------------------
import {combineReducers} from 'redux';
const songsReducer = () => {
   return [
       {title: 'Hotel California ' , duration : '6:30'},
       {title: 'Besame Mucho ' , duration : '3:30'},
       {title: 'Kaalinka' , duration : '4:40'},
       {title: 'Lilly Marlene' , duration : '5:30'},
       {title: 'Khair Mangdi' , duration : '3:50'},
       {title: 'Simarik' , duration : '3:50'},
   ];
}
const selectedSongReducer =(SelectedSong=null,action) =>{
if(action.type=== 'SONG_SELECTED'){
   return action.payload
}
return SelectedSong ;
}
export default combineReducers ({
   songs: songsReducer,
   selectedSong:selectedSongReducer
})