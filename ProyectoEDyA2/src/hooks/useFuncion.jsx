import React, { createContext, useContext, useState } from 'react';

const ShowtimeContext = createContext();

export const ShowtimeProvider = ({ children }) => {
  const [selectedShowtime, setSelectedShowtime] = useState(null);

  return (
    <ShowtimeContext.Provider value={{ selectedShowtime, setSelectedShowtime }}>
      {children}
    </ShowtimeContext.Provider>
  );
};

export const useFuncion = () => useContext(ShowtimeContext);
