import React, { useState, useEffect, useRef, useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { useStore } from '../Data/ConfigStore';
import "./Timer.css" 

let fontList = ["Odibee Sans",
    "Raleway",
    "Playfair Display",
    "Simonetta",
    "Indie Flower",
    "Lobster",
    "Source Code Pro",
    "Dancing Script",
    "Amatic SC",
    "Cinzel",
    "Permanent Marker",
    "Satisfy",
    "Advent Pro",
    "Poiret One",
    "Special Elite",
    "Monoton",
    "Press Start 2P"]

const FontPicker = observer(() => { 
        const store = useStore();//useContext(stores.Attempts.attemptContext)

        return  (
            <select className="fontPicker" onChange={e => {
                console.log(e.target.value)
                let t1 = store;
                store.changeFont(e.target.value);
            }}>
                {fontList.map((font) =>
                    <option value={font} key={font}>{font}</option>)}
            </select>
        );
    })

export default FontPicker;