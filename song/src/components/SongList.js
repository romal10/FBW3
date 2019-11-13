import React, { Component } from 'react'
import {connect} from 'react-redux';
class SongList extends Component {
    renderList(){
        return this.props.songs.map((song)=>{
           return (
               <div key={song.title}>
                   <div>
                       <button>Select</button>
                       {song.title}
                   </div>
               </div>
           )
        })
    }
   render() {
       console.log('this.props: ',this.props.songs)
       return (
           <div>
               {this.renderList()}
           </div>
       )
   }
}
const getMyState= (state) =>{
   console.log(state);
   return {
       songs:state.songs
   }
}
export default connect (getMyState)(SongList)