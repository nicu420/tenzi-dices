import { useState } from "react";

function Dice({ value, status, handleClick }) {
  return (
    <div>
      {status ? (
        <button
          onClick={handleClick}
          className="flex h-20 w-20 items-center justify-center border-4 border-green-400 text-xl text-green-200 hover:border-green-200 hover:text-green-200"
        >
          {value}
        </button>
      ) : (
        <button
          onClick={handleClick}
          className="flex h-20 w-20 items-center justify-center border-4 border-zinc-500 text-xl text-zinc-300 hover:border-zinc-300 hover:text-zinc-300"
        >
          {value}
        </button>
      )}
    </div>
  );
}

export default Dice;
