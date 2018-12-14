import React, {Component} from 'react';

import { Tabs } from 'antd';

const TabPane = Tabs.TabPane;

class Song extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: null
    };
  }


  render() {
    const {song} = this.props;
    return (
      <div>
        <h1>{song.title}</h1>
      <Tabs
        defaultActiveKey="1"
        tabPosition="left"
        style={{ height: 220 }}>
          <TabPane tab="LeadSheets" key="1">

            Leadsheets
          </TabPane>
          <TabPane tab="Videos" key="2">
            videos
          </TabPane>
          <TabPane tab="Audio" key="3">
            audios
          </TabPane>
      </Tabs>
   </div>

    );
  }


};

export default Song;
