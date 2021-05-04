import { createSlice } from '@reduxjs/toolkit'

interface IAlbum {
  title: string,
  thumbnail: string,
}

const initialState: IAlbum = {
  title: '',
  thumbnail: '',
} 

export const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    set: (state, action) => {
      state.title = action.payload.title
      state.thumbnail = action.payload.thumbnail
    },
  },
})

// Action creators are generated for each case reducer function
export const { set } = albumSlice.actions

// export const asyncSet = async ({title, thumbnail}) => dispatch => {
//   dispatch(set({title, thumbnail}))
// }

export default albumSlice.reducer