import React, { useState, useEffect, useRef, useContext } from 'react';
import Typer from "../Components/Typer"
import Timer from "../Components/Timer"
import FontPicker from "../Components/FontPicker"
import Controls from "../Components/Controls"
import Instructions from "../Components/Instructions"
import logo from '../assets/logo.svg';
import './App.css';
import { StoreProvider } from '../Data/ConfigStore'
import { observer, useObserver } from 'mobx-react-lite';
import { useStore } from '../Data/ConfigStore';

const style = {
  bgImage: {
    backgroundImage: `url(${logo})`
  }
};


const WithTheme = observer(({ children }) => {
  const store = useStore();
  console.log("debug Me!")
  return (
    <div style={{ fontFamily: store.font }} className="App">
      {children}
    </div>
  )
})

const GlobalControlls = observer(({ children }) => {
  const store = useStore();
  console.log("debug Me!")
  return (
    <div className="App-header"
      onKeyDown={e => {
        console.log(e);
        if (e.ctrlKey && e.altKey) {
          if (e.key == "p") {
            console.log("TODO : Profile page");
          }
          if (e.key == "k") {
            console.log("Get new quote")
          }
          if (e.key == "m") {
            console.log("Retry quote")
          }
        }
      }}>
      {children}
    </div>
  )
})

const CurrentQuote = observer(({ }) => {
  let store = useStore()
 
  return (
    <div className="targetQuote">{store.getCurrentText()}</div>
  )
})

const App = () => {
  let [writtenQuote, setWritten] = useState("")

  return (
    <StoreProvider>
      <WithTheme>
        <GlobalControlls>

          <div style={style.bgImage} className="App-logo" alt="logo" />

          <div className="typerHeader">
            Speed Typer
              <br />(create-react-app / mobx-react-lite)
          </div>

          <FontPicker />
          
          <Instructions />

          <Timer />

          <CurrentQuote />

          <Typer />

          <Controls />
        </GlobalControlls>
      </WithTheme>
    </StoreProvider >
  );
}

export default App;
