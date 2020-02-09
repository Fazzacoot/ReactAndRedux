import React from "react";
import { connect } from "react-redux";

const SongDetail = props => {
  const { song } = props;

  if (!song) {
    return <div>Select a song</div>;
  }
  return (
    <div>
      <h3>Details for:</h3>
      <p>
        Title: {song.title} 
        <br/>
        Duration: {song.duration}
      </p>
    </div>
  );
};

//get all values in redux store and add them to the props of the react page
const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
