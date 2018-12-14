import React, {Component} from 'react';

import {songs} from '../tmpStore';

import { Modal } from 'antd';
import SongCard from '../components/SongCard';
import Song from '../components/Song';

class ProjectContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };
  }


  render() {
    return (
      <div>
        <h1>project container</h1>
        {this.getSongCards(songs)}
        {this.getSongModal()}
      </div>
    );
  }

  selectSong = (songId) => {
    this.setState({selected: songId});
  }

  clearSelectedSong = () => {
    this.setState({selected: null});
  }

  getSongModal = () => {
    return (
      <Modal
        title={this.state.selected}
        visible={!!this.state.selected}
        closable={true}
        footer={null}
        width={'95vw'}
        destroyOnClose={true}
        onCancel={this.clearSelectedSong}>

        <Song song={songs[this.state.selected]}/>

      </Modal>)
  }

  getSongCards = (songs) => Object.keys(songs).map((songId) => (
    <SongCard
      title={songs[songId].title}
      songId={songId}
      select={this.selectSong}
    />
  ))

};

export default ProjectContainer;
