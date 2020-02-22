import React, { useState, useEffect, useRef, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../Data/ConfigStore';
import "./Timer.css"

const FontPicker = observer(() => {
    const store = useStore();//useContext(stores.Attempts.attemptContext)

    return (
        <div className="controls">
            <button onClick={e => {
                store.startNew()
            }}>
                new quote</button>

            <button onClick={e => {
                store.tryAgain()
            }}>
                retry quote</button>
        </div>
    );
})

export default FontPicker;