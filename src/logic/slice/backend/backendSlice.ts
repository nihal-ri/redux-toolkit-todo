import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface BackendData {
  loading: boolean;
  error: string;
  users: {
    id: number;
    name: string;
    username: string;
    email: string;
  }[];
}

const initialState: BackendData = {
  loading: false,
  error: "",
  users: [],
};

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await (
    await fetch("https://jsonplaceholder.typicode.com/users")
  ).json();

  return response;
});

const backendSlice = createSlice({
  name: "backend",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.error = "Error fetching users";
    });
  },
});

export default backendSlice.reducer;
