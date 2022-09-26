import { createAction } from "@reduxjs/toolkit";
import { UserData } from "logic/reducers";

export const toggleDarkMode = createAction("UI/toggleDarkMode");

export const addUser = createAction<UserData>("UserData/addUser");
