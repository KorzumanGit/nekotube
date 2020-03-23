import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
// YSearchの名前部分は任意で設定
import YSearch from 'youtube-api-search';

const YOUTUBE_API_KEY = 'AIzaSyDxBSxp-30XQ09x_iQ6b1YmmscYz9Dyozw'



class App extends React.Component {

  state = { videos: [] }

  componentDidMount() {
    YSearch({ key: YOUTUBE_API_KEY, term: '猫　きゅうり' }, (data) => {
      this.setState({ videos: data })
    });
  }

  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
