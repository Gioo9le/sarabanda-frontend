import '../App.css';
import './MainPlayPage.css'
import OptionComponent from "../Components/OptionComponent";
import {useState, useEffect} from "react";

function MainPlayPage(props) {
    useEffect(()=>{
        console.log(props)

        setTimeout(()=>{
            let currentPlaying = document.getElementById('currentPlaying')
            if(currentPlaying.currentSrc != ''){
                currentPlaying.play()
            }
        }, 2000)

    })
    console.log(props)

    return (
        <div>
            <button id={'readyButton'} onClick={()=>{props.getOptions()}}>Ready</button>
            <audio
                id={"currentPlaying"}
                controls
                src={props.currentPlaying}>
                Your browser does not support the
                <code>audio</code> element.
            </audio>
            <div className={'artistBox'}>
                <div className={'boxTitle'}>ARTIST</div>
                {props.artistOptions.map((artist, idx)=>{
                    return <OptionComponent name={artist[0]} idx={idx} isCorrect={artist[1]} selected={props.selectedArtist} select={props.selectArtist}/>
                })}
            </div>
            <div className={'songBox'}>
                <div className={'boxTitle'}>SONG</div>
                {props.songOptions.map((song, idx)=>{
                    return <OptionComponent name={song[0]} idx={idx} isCorrect={song[1]} selected={props.selectedSong} select={props.selectSong}/>
                })}
            </div>
        </div>
    );
}

export default MainPlayPage;
