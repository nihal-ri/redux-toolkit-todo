import produce from "immer";

const baseState = [
  {
    todo: "Learn typescript",
    done: true,
  },
  {
    todo: "Try immer",
    done: false,
  },
];

// ========================================= Without Immer =========================================

let WithoutImmerNextState = [
  ...baseState,
  {
    todo: "Tweet about it",
  },
];

WithoutImmerNextState = WithoutImmerNextState.map((d, i) => {
  if (i === 1) {
    return {
      ...d,
      done: true,
    };
  } else {
    return d;
  }
});

// ========================================= With Immer =========================================

/**
 * PRODUCE  function
 * @param {baseState,(draftState)=>{}}
 *
 */

const WithImmerNextState = produce(baseState, (draftState) => {
  // "mutate" the draft array
  draftState.push({ todo: "Tweet about it" });
  // "mutate" the nested state
  draftState[1].done = true;
});

console.log(baseState === WithImmerNextState);
// false - the array was copied
console.log(baseState[0] === WithImmerNextState[0]);
// true - the first item was unchanged, so same reference
console.log(baseState[1] === WithImmerNextState[1]);
// false - the second item was copied and updated
