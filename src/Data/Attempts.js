import React, { createContext } from "react";
import { useLocalStore } from "mobx-react-lite";

export const attemptContext = createContext();

export const AttemptProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    raceStartTime: null,
    count: 1,
    font: "Special Elite",
    start(){
      store.raceStartTime = Date.now();
    },
    increment() {
      store.count++;
    },
    decrement() {
      store.count--;
    }
  }));

  return (
    <attemptContext.Provider value={store}>{children}</attemptContext.Provider>
  );
};

export default {attemptContext, AttemptProvider};