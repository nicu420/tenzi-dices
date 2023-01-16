import { useState } from "react";

function Dice({ value, status, handleClick }) {
  let dice;

  if (status) {
    switch (value) {
      case 1:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-2 text-center hover:border-green-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="center-0 absolute h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 2:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-2 text-center hover:border-green-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 3:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-2 text-center hover:border-green-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="center-0 absolute h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 4:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-2 text-center hover:border-green-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 5:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-2 text-center hover:border-green-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              <div className="center-0 absolute h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 6:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-green-400 p-2 text-center hover:border-green-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-between sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="flex flex-col gap-1.5">
                <div className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
                <div className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
                <div className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
                <div className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
                <div className="h-2 w-2 rounded-full bg-green-400 group-hover:bg-green-300 lg:h-3 lg:w-3"></div>
              </div>
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
            className="group rounded-lg border-4 border-zinc-400 p-2 text-center hover:border-zinc-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="center-0 absolute h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 2:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-2 text-center hover:border-zinc-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 3:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-2 text-center hover:border-zinc-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="center-0 absolute h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 4:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-2 text-center hover:border-zinc-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 5:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-2 text-center hover:border-zinc-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-center sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="absolute top-0 left-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="absolute top-0 right-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 left-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              <div className="center-0 absolute h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
            </div>
          </button>
        );
        break;
      case 6:
        dice = (
          <button
            onClick={handleClick}
            className="group rounded-lg border-4 border-zinc-400 p-2 text-center hover:border-zinc-300 sm:p-3 lg:p-4"
          >
            <div className="relative flex h-7 w-7 items-center justify-between sm:h-7 sm:w-7 lg:h-12 lg:w-12">
              <div className="flex flex-col gap-1.5">
                <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
                <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
                <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
                <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
                <div className="h-2 w-2 rounded-full bg-zinc-400 group-hover:bg-zinc-300 lg:h-3 lg:w-3"></div>
              </div>
            </div>
          </button>
        );
        break;
    }
  }

  return <div>{dice}</div>;
}

export default Dice;
