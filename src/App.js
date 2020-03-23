import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
// YSearchの名前部分は任意で設定
import YSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyDxBSxp-30XQ09x_iQ6b1YmmscYz9Dyozw'



class App extends React.Component {

  state = { videos: [] }

  componentWillMount() {
    console.log('willmountダオ');
  }

  componentDidMount() {
    YSearch({ key: YOUTUBE_API_KEY, term: 'こーづまん' }, (data) => {
      this.setState({ videos: data });
    });
    console.log("componentDidMountでーす。")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('更新前のstate:' + this.state.videos);
    console.log('更新後のstate:' + nextState.videos);
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdateでーす。")
  }

  componentDidUpdate() {
    console.log("componentDidUpdateでーす。")
  }

  render() {
    console.log(this.state.videos);
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
