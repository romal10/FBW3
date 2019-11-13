//Action creator
export const selectSong = (song) =>{
    //return an action
    return {
         type: 'SONG_SELECTED',
         payloads: song
    }
    }
    // export default selectSong;