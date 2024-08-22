import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  keyword: ''
}
const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload.keyword
    },
    resetFilterState: (state) => {
      Object.assign(state, initialState)
    }
  }
})

export const filterActions = filterSlice.actions

export const filterReducer = filterSlice.reducer
