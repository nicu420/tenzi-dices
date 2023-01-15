import { useState } from "react";

function Dice({ value, status, handleClick }) {
  return (
    <div>
      {status ? (
        <button
          onClick={handleClick}
          className="flex h-10 w-10 items-center justify-center border-2 border-green-400 text-lg text-green-200 hover:border-green-200 hover:text-green-200 sm:h-20 sm:w-20 sm:border-4 sm:text-xl"
        >
          {value}
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="flex h-10 w-10 items-center justify-center border-2 border-zinc-500 text-lg text-zinc-300 hover:border-zinc-300 hover:text-zinc-300 sm:h-20 sm:w-20 sm:border-4 sm:text-xl"
        >
          {value}
        </button>
      )}
    </div>
  );
}

export default Dice;
