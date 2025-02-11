import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { allUserListType, UpdateUserType, userType } from "@/types/type";

interface UserProps {
  users: allUserListType;
  user: userType;
  loading: boolean;
  error: boolean;
  activity: boolean;
}

const initialState: UserProps = {
  users: [],
  user: { id: "" },
  loading: false,
  error: false,
  activity: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = false;
      state.activity = false;
    },
    error: (state) => {
      state.loading = false;
      state.error = true;
      state.activity = false;
    },
    activity: (state) => {
      state.loading = false;
      state.error = false;
      state.activity = true;
    },
    listAllUsers: (state, { payload }: PayloadAction<allUserListType>) => {
      state.users = payload;
      state.loading = false;
      state.error = false;
    },
    getUser: (state, { payload }: PayloadAction<userType>) => {
      state.user = payload;
      state.loading = false;
      state.error = false;
    },
    updateUserStatus: (state, { payload }: PayloadAction<UpdateUserType>) => {
      const userIndex = state.users.findIndex((user) => user.id === payload.id);
      if (userIndex !== -1) {
        state.users[userIndex].status = payload.status;
      }
      state.loading = false;
      state.error = false;
    },
  },
});

export const {
  loading,
  error,
  activity,
  listAllUsers,
  getUser,
  updateUserStatus,
} = userSlice.actions;
export default userSlice.reducer;
