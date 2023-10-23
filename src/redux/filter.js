import { createSlice } from '@reduxjs/toolkit';

// Initial filter state
const initialFilterState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialFilterState,
  reducers: {
    // Update the filter value based on the passed action
    changeFilter: (state, action) => (state = action.payload),
  },
});

// Exporting a changeFilter action from a slice filter
export const { changeFilter } = filterSlice.actions;

// Export the filter reducer from the slice filter
export const filterReducer = filterSlice.reducer;