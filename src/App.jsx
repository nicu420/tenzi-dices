import { useState } from "react";
import Dice from "./Dice";
import Confetti from "react-confetti";

function App() {
  const [values, setValues] = useState(Array(10).fill(null));
  const [frozen, setFrozen] = useState(Array(10).fill(false));
  const [rememberedValue, setRememberedValue] = useState(0);
  const [won, setWon] = useState(false);
  const [count, setCount] = useState(0);

  if (!values[0]) {
    roll();
  }

  function roll() {
    if (won) {
      return;
    }

    let newValues = [...values];
    for (let i = 0; i < 10; i++) {
      if (!frozen[i]) {
        newValues[i] = Math.floor(Math.random() * 6) + 1;
      }
    }
    setValues(newValues);
    setCount(count + 1);
  }

  function handleFreeze(i) {
    if (won) {
      return;
    }

    if (!rememberedValue) {
      let newFrozen = [...frozen];
      newFrozen[i] = !newFrozen[i];
      setFrozen(newFrozen);
      setRememberedValue(values[i]);
    }

    if (rememberedValue === values[i]) {
      let newFrozen = [...frozen];
      newFrozen[i] = !newFrozen[i];
      setFrozen(newFrozen);
      if (newFrozen.every((e) => e)) {
        setWon(true);
      }
      if (newFrozen.every((e) => !e)) {
        setRememberedValue(0);
      }
    }
  }

  function restart() {
    setValues(Array(10).fill(null));
    setFrozen(Array(10).fill(false));
    setRememberedValue(0);
    setWon(false);
    setCount(0);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10 bg-zinc-900">
      <div>
        {won ? (
          <div>
            <Confetti
              width={window.innerWidth - 2}
              height={window.innerHeight - 2}
            />
            <h1 className="text-lg text-zinc-300 sm:text-xl">You Won!</h1>
          </div>
        ) : (
          <h1 className="text-lg text-zinc-300 sm:text-xl">count: {count}</h1>
        )}
      </div>
      <div className="flex flex-col gap-3 sm:gap-5">
        <div className="flex flex-row gap-3 sm:gap-5">
          <Dice
            handleClick={() => handleFreeze(0)}
            status={frozen[0]}
            value={values[0]}
          />
          <Dice
            handleClick={() => handleFreeze(1)}
            status={frozen[1]}
            value={values[1]}
          />
          <Dice
            handleClick={() => handleFreeze(2)}
            status={frozen[2]}
            value={values[2]}
          />
          <Dice
            handleClick={() => handleFreeze(3)}
            status={frozen[3]}
            value={values[3]}
          />
          <Dice
            handleClick={() => handleFreeze(4)}
            status={frozen[4]}
            value={values[4]}
          />
        </div>
        <div className="flex flex-row gap-3 sm:gap-5">
          <Dice
            handleClick={() => handleFreeze(5)}
            status={frozen[5]}
            value={values[5]}
          />
          <Dice
            handleClick={() => handleFreeze(6)}
            status={frozen[6]}
            value={values[6]}
          />
          <Dice
            handleClick={() => handleFreeze(7)}
            status={frozen[7]}
            value={values[7]}
          />
          <Dice
            handleClick={() => handleFreeze(8)}
            status={frozen[8]}
            value={values[8]}
          />
          <Dice
            handleClick={() => handleFreeze(9)}
            status={frozen[9]}
            value={values[9]}
          />
        </div>
      </div>
      {!won ? (
        <div>
          <button
            onClick={roll}
            className="text-lg text-zinc-300 hover:text-purple-400 active:text-purple-200 sm:text-xl"
          >
            Roll
          </button>
        </div>
      ) : (
        <div>
          <button
            onClick={restart}
            className="text-lg text-zinc-300 hover:text-purple-400 active:text-purple-200 sm:text-xl"
          >
            Restart
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
