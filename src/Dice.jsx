import { useState } from "react";

function Dice({ value, status, handleClick }) {
  let dice;

  if (status) {
    switch (value) {
      case 1:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-4 text-center hover:border-green-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="center-0 absolute h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
            </div>
          </button>
        );
        break;
      case 2:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-4 text-center hover:border-green-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
            </div>
          </button>
        );
        break;
      case 3:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-4 text-center hover:border-green-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="center-0 absolute h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
            </div>
          </button>
        );
        break;
      case 4:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-4 text-center hover:border-green-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
            </div>
          </button>
        );
        break;
      case 5:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-4 text-center hover:border-green-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <p className="absolute top-0 left-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></p>
              <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="center-0 absolute h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
            </div>
          </button>
        );
        break;
      case 6:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-4 text-center hover:border-green-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="center-0 absolute h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-400 group-hover:bg-green-300"></div>
            </div>
          </button>
        );
        break;
    }
  } else {
    switch (value) {
      case 1:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-4 text-center hover:border-zinc-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="center-0 absolute h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
            </div>
          </button>
        );
        break;
      case 2:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-4 text-center hover:border-zinc-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
            </div>
          </button>
        );
        break;
      case 3:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-4 text-center hover:border-zinc-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="center-0 absolute h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
            </div>
          </button>
        );
        break;
      case 4:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-4 text-center hover:border-zinc-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
            </div>
          </button>
        );
        break;
      case 5:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-4 text-center hover:border-zinc-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <p className="absolute top-0 left-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></p>
              <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="center-0 absolute h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
            </div>
          </button>
        );
        break;
      case 6:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-4 text-center hover:border-zinc-300"
          >
            <div className="relative flex h-12 w-12 items-center justify-center">
              <div className="absolute top-0 left-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="center-0 absolute h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-zinc-400 group-hover:bg-zinc-300"></div>
            </div>
          </button>
        );
        break;
    }
  }

  return <div>{dice}</div>;
}

export default Dice;
