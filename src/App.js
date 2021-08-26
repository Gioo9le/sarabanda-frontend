import './App.css';
import './Fonts/Roboto_Condensed/RobotoCondensed-Regular.ttf'
import {useState} from "react";
import SyncPage from "./Pages/SyncPage";
import MainPlayPage from "./Pages/MainPlayPage";
import {BrowserRouter as Router, Switch, Route, useLocation} from 'react-router-dom'

function App() {
  const [syncTime, setSyncTime] = useState();
  const [artistOptions, setArtistOptions] = useState([['Mika', true], ['Mika', true], ['Mika', true], ['Mika', true], ['Mika', true]]);
  const [songOptions, setSongOptions] = useState([['Mika', true], ['Mika', true],['Mika', true], ['Mika', true], ['Mika', true]]);
  const [currentPlaying, setCurrentPlaying] = useState();
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [selectedSong, setSelectedSong] = useState([false, false, false, false, false]);
  const [selectedArtist, setSelectedArtist] = useState([false, false, false, false, false])
  const syncButton = function(timestamp){
    setSyncTime(timestamp);
    fetch('http://localhost:5000/login').then(res=>res.text()).then((res)=>window.location.href = res);

  }
  const selectSong = function(id){

      if(selectedSong.every((el)=>el==false)){
          console.log('Song pressed')
          let temp_selected_song = selectedSong;
          temp_selected_song[id] = true;
          for(let i=0; i<songOptions.length; i++){
              if(songOptions[i][1]){
                  temp_selected_song[i] = true;
              }
          }
          setSelectedSong([...temp_selected_song])
      }
  }
  const selectArtist = function(id){
      if(selectedArtist.every((el)=>el==false)){
        console.log('Artist pressed');
        let temp_selected_artist = selectedArtist;
        temp_selected_artist[id] = true;
          for(let i=0; i<artistOptions.length; i++){
              if(artistOptions[i][1]){
                  temp_selected_artist[i] = true;
              }
          }
        setSelectedArtist([...temp_selected_artist]);
      }
  }

  const getSongArtistOptions = function(){
      fetch('http://localhost:5000/song').then(res=>res.json()).then(res=>{console.log(res); return res}).then((res)=>{
          setSongOptions(res.songs_artists.map((el)=>{return el[1]}).sort(function() { return 0.5 - Math.random() }));
          setArtistOptions(res.songs_artists.map((el)=>{return el[0]}).sort(function() { return 0.5 - Math.random() }));
          setCurrentPlaying(res.current_playing)
      })
      setSelectedSong([false, false, false, false, false]);
      setSelectedArtist([false, false, false, false, false]);
  }
  switch(window.location.pathname){
      case '/play':
  }
  return (
      <Router>
          <Switch>
              <Route path="/play">
                  <MainPlayPage
                      artistOptions={artistOptions}
                      songOptions={songOptions}
                      getOptions={getSongArtistOptions}
                      currentPlaying={currentPlaying}
                      selectedSong={selectedSong}
                      selectSong={selectSong}
                      selectedArtist={selectedArtist}
                      selectArtist={selectArtist}
                  />
              </Route>
              <Route path="/">
                  <SyncPage syncButton={syncButton}/>
              </Route>
          </Switch>
      </Router>

  );
}

export default App;
