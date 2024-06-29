import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import {
  listAllUsers,
  loading,
  error,
  getUser,
  updateUserStatus,
} from "@/slices/user";
import { UpdateUserType } from "@/types/type";

const client = axios.create({
  baseURL: "http://localhost:3001/users",
});

export const listAllUsersThunk = createAsyncThunk(
  "users/listAllUsers",
  async (_, { dispatch }) => {
    try {
      dispatch(loading());

      const response = await client.get("?_limit=10");

      const data = response.data;

      dispatch(listAllUsers(data));
    } catch {
      dispatch(error());
    }
  }
);

export const getUserThunk = createAsyncThunk(
  "users/getUser",
  async (userId: string, { dispatch }) => {
    try {
      dispatch(loading());

      const response = await client.get(`/${userId}`);

      const data = response.data;

      dispatch(getUser(data));
    } catch {
      dispatch(error());
    }
  }
);

export const updateUserStatusThunk = createAsyncThunk(
  "user/updateUserStatus",
  async (userData: UpdateUserType, { dispatch }) => {
    try {
      dispatch(loading());

      const response = await client.patch(`/${userData.id}`, {
        status: userData?.status,
      });

      const data = response.data;

      dispatch(updateUserStatus(data));
    } catch {
      dispatch(error());
    }
  }
);
