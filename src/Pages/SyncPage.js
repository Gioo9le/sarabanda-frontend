import '../App.css';
import './SyncPage.css'
import {useState} from "react";

function SyncPage(props) {

    return (
        <div>
            <div id={"syncTitle"}>SYNC</div>
            <div onClick={() => {props.syncButton(new Date().getTime())}} id={"syncButton"}>
                <div id={"syncLabel"}>
                    PRESS
                </div>
            </div>
        </div>
    );
}

export default SyncPage;
