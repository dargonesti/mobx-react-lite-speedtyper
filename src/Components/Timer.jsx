import React, {useState, useEffect, useRef, useContext} from 'react';
import stores from "../Data"
import "./Timer.css"
import { useObserver } from 'mobx-react-lite';


function Timer(){
    let refWriting = useRef("")
    let t1 = stores;
    const store = useContext(stores.Attempts.attemptContext)

    return  useObserver(()=>(
    <div className="countdowntimer">x sec</div>
    ));
}

export default Timer;