import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGifs } from "@/app-gif/thunks";
import { GifCard } from "../components/GifCard";
import { useNavigate } from "react-router-dom";

export const GifPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, gifs } = useSelector((state) => state.gifs);

  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(getGifs(inputValue));
  };

  const onHandleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="d-flex align-items-center w-100">
          <h1 className="w-50 m-0 p-0 font-weight-bold text-prtimary text-uppercase">
            Gif Page
          </h1>
          <div className="d-flex justify-content-end w-50">
            <button
              className="p-0 m-0"
              style={{
                width: 100,
                height: 50,
              }}
              onClick={onHandleBack}
            >
              Back
            </button>
          </div>
        </div>
        <input
          className="mt-2"
          type="text"
          value={inputValue}
          onChange={onInputChange}
        />
        <ul className="d-flex justify-content-start m-0 flex-wrap w-100 p-0">
          {gifs.map((gif) => {
            return <GifCard key={gif.id} gif={gif} />;
          })}
        </ul>
      </form>
    </>
  );
};
