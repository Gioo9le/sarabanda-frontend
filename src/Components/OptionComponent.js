import '../App.css';
import './OptionComponent.css'
import {useState, useEffect} from "react";

function OptionComponent(props) {
    let styleString = `optionComponent optionComponent${props.idx} ${props.selected[props.idx] ? (props.isCorrect?'optionComponentSelectedTrue':'optionComponentSelectedFalse'):''}`

    console.log(props.key);
    console.log(props.selected[props.idx] ? (props.isCorrect?'optionComponentSelectedTrue':'optionComponentSelectedFalse'):'')
    return (
        <div className={styleString} onClick={()=>props.select(props.idx)}>
            <div className={'optionLabel'}>{props.name.substring(0,25)+(props.name.length>=25?'...':'')}</div>
        </div>
    );
}

export default OptionComponent;
