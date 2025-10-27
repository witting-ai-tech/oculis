import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  hasNewNotifications: false,
};

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setHasNewNotifications: (state, action) => {
      state.hasNewNotifications = action.payload;
    },
  },
});

export const { setHasNewNotifications } = notificationSlice.actions;
export default notificationSlice.reducer; 