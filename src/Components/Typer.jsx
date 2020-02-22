import React, { useState, useEffect, useRef, useContext } from 'react';
import { useStore } from '../Data/ConfigStore';
import "./Typer.css"
import { observer } from 'mobx-react-lite';

const Typer = observer(() => {
  let refWriting = useRef("")
  const store = useStore()

  useEffect(() => {


  }, [store.currentQuoteInd])

  return (
    <textarea onChange={(e) => {
      console.log(refWriting.current.value);
    }}
      ref={refWriting} rows={10}
      className="writtenQuote"></textarea>
  );
})

export default Typer;