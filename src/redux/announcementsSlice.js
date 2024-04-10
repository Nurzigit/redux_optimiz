import { createSlice } from '@reduxjs/toolkit';

export const announcementsSlice = createSlice({
  name: 'announcements',
  initialState: [],
  reducers: {
    addAnnouncement: (state, action) => {
      state.push(action.payload);
    },
    deleteAnnouncement: (state, action) => {
      return state.filter(announcement => announcement.id !== action.payload);
    },
    editAnnouncement: (state, action) => {
        const index = state.findIndex(announcement => announcement.id === action.payload.id);
        if (index !== -1) {
          state[index].text = action.payload.text;
        }
      },
  },
});

export const { addAnnouncement, deleteAnnouncement, editAnnouncement } = announcementsSlice.actions;

export default announcementsSlice.reducer;
