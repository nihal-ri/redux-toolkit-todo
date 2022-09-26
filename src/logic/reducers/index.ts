import { createReducer } from "@reduxjs/toolkit";

import { addUser, toggleDarkMode } from "logic/actions";

// ========================================= Interfaces =========================================
interface I_UIstates {
  isDarkmode: boolean;
}

export interface UserData {
  email: string;
  name: string;
  address: string;
  phone: string;
  birthday: string;
  zodiac: string;
  age: number;
  username: string;
  countryCode: number;
  company: string;
  occupation: string;
}

interface I_UserStates {
  user: UserData;
}

// ========================================= Initial states =========================================

const initialUIState: I_UIstates = {
  isDarkmode: false,
};
const initialUserState: I_UserStates = {
  user: {
    address: "",
    age: 0,
    birthday: "",
    company: "",
    countryCode: 0,
    email: "",
    name: "",
    occupation: "",
    phone: "",
    username: "",
    zodiac: "",
  },
};

// ========================================= Reducers =========================================

export const uIReducer = createReducer(initialUIState, (builder) => {
  builder.addCase(toggleDarkMode, (state, _action) => {
    state.isDarkmode = !state.isDarkmode;
  });
});

export const userDataReducer = createReducer(initialUserState, (builder) => {
  builder.addCase(addUser, (state, action) => {
    state.user = action.payload;
  });
});
