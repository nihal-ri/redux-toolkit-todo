import { createAction } from "@reduxjs/toolkit";

export const toggleDarkMode = createAction("UI/toggleDarkMode");

export const addUser = createAction<any>("UserData/addUser");
