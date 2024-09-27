import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGifs } from "@/app-gif/thunks";

export const GifPage = () => {
  const dispatch = useDispatch();
  const { isLoading, gifs } = useSelector((state) => state.gifs);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(getGifs(inputValue));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1 className="font-weight-bold text-prtimary text-uppercase">
          Gif Page
        </h1>
        <input type="text" value={inputValue} onChange={onInputChange} />
        <ul>
          {gifs.map((gif) => {
            return (
              <li key={gif.id}>
                <img
                  src={gif.images.downsized_medium.url}
                  alt={gif.name}
                  loading="lazy"
                ></img>
              </li>
            );
          })}
        </ul>
      </form>
    </>
  );
};
