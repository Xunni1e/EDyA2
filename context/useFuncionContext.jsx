import React, { createContext, useContext, useState } from 'react';

const ShowtimeContext = createContext();

export const ShowtimeProvider = ({ children }) => {
  const [selectedShowtime, formato] = useState("");

  const [showtimeInfo, setShowtimeInfo] = useState({
    selectedShowtime: null,
    formato: null
  });

  const setFullShowtime = (selectedShowtime, formato) => {
    setShowtimeInfo({ selectedShowtime, formato });
  };

  return (
    <ShowtimeContext.Provider value={{ ...showtimeInfo, setFullShowtime }}>
      {children}
    </ShowtimeContext.Provider>
  );
};

export const useFuncion = () => useContext(ShowtimeContext);
