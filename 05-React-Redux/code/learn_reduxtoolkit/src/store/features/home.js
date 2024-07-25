import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// export const fetchHomeMultidataAction = createAsyncThunk(
//   'fetch/homemultidata',
//   // 该函数可以接收额外的参数和store，对store里进行解构得到dispatch和getState
//   async (extraParams, { dispatch, getState }) => {
//     // 1.发送网络请求获取数据
//     const res = await axios.get('http://123.207.32.32:8000/home/multidata')
//     console.log(res.data);
//     // 2.取出数据，并且在此处直接dispatch操作
//     const banners = res.data.data.banner.list
//     const recommends = res.data.data.recommend.list
//     dispatch(changeBanners(banners))
//     dispatch(changeRecommends(recommends))

//     // 3.返回结果，action状态会变成fulfilled状态(用到extraReducers需要)
//     return res.data
//   })

// 直接dispatch里返回一个函数，函数中进行异步操作
export const fetchHomeMultidataAction = () => {
  return async (dispatch) => {
    const res = await axios.get('http://123.207.32.32:8000/home/multidata')
    const banners = res.data.data.banner.list
    const recommends = res.data.data.recommend.list
    dispatch(changeBanners(banners))
    dispatch(changeRecommends(recommends))
  }
}

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    banners: [],
    recommends: []
  },
  reducers: {
    changeBanners(state, action) {
      // console.log(action);
      state.banners = action.payload
    },
    changeRecommends(state, action) {
      state.recommends = action.payload
    }
  },
  // 异步操作的reducer (此方法已移除)
  // extraReducers: {
  //   // 监听异步操作的不同状态
  //   [fetchHomeMultidataAction.pending](state, action) {
  //     console.log('fetchHomeMultidataAction pending');
  //   },
  //   [fetchHomeMultidataAction.fulfilled](state, action) {
  //     console.log('fetchHomeMultidataAction fulfilled');
  //     state.banners = action.payload.data.banners.list
  //     state.recommends = action.payload.data.recommend.list
  //   },
  //   [fetchHomeMultidataAction.rejected]() {
  //     console.log('fetchHomeMultidataAction rejected');
  //   }
  // }
  extraReducers: (builder) => {
    // builder
    //   .addCase(fetchHomeMultidataAction.pending, (state, action) => {
    //     console.log('fetchHomeMultidataAction pending');
    //   })
    //   .addCase(fetchHomeMultidataAction.fulfilled, (state, { payload }) => {
    //     console.log('fetchHomeMultidataAction fulfilled');
    //     state.banners = payload.data.banner.list
    //     state.recommends = payload.data.recommend.list
    //   })
    //   .addCase(fetchHomeMultidataAction.rejected, (state, action) => {
    //     console.log('fetchHomeMultidataAction rejected');
    //   })
  }

})

export const { changeBanners, changeRecommends } = homeSlice.actions

export default homeSlice.reducer