import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export function MoiveProvider(props) {
  const [movies, setMovies] = useState([]);

  return <MovieContext.Provider>{props.children}</MovieContext.Provider>;
}
