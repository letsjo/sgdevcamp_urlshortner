import { urlSliceAction } from "../reducers/urlReducer";
import { createAsyncThunk } from "@reduxjs/toolkit";
import userAPI from "../../apis/userApi";

const getShortUrl = createAsyncThunk(
  "url/createShortUrl",
  async ({ full }, { rejectWithValue }) => {
    try {
      const res = await userAPI.post(`/`, {
        full: full,
      });
      return res;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.response.data);
    }
  }
);

export const urlAction = { getShortUrl };
