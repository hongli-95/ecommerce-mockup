/* eslint-disable no-unused-vars */
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const getWomenProducts = createAsyncThunk(
  "store/getWomenProducts",
  async () => {
    return fetch(
      "https://fakestoreapi.com/products/category/women%27s%20clothing"
    ).then((res) => res.json());
  }
);

export const getMenProducts = createAsyncThunk(
  "store/getMenProducts",
  async () => {
    return fetch(
      "https://fakestoreapi.com/products/category/men%27s%20clothing"
    ).then((res) => res.json());
  }
);

export const getJeweleryProducts = createAsyncThunk(
  "store/getJewelery",
  async () => {
    return fetch("https://fakestoreapi.com/products/category/jewelery").then(
      (res) => res.json()
    );
  }
);

export const getElectronicsProducts = createAsyncThunk(
  "store/getElectronics",
  async () => {
    return fetch("https://fakestoreapi.com/products/category/electronics").then(
      (res) => res.json()
    );
  }
);

export const storeSlice = createSlice({
  name: "store",
  initialState: {
    cart: {},
    products: [],
    isLoading: false,
    displayCart: false,
    displayModal: false,
    currSelectedProduct: {},
    count: 0,
    grandTotal: 0,
  },
  reducers: {
    backToHome: (state) => {
      state.products.splice(0);
      state.isLoading = false;
    },
    showModal: (state) => {
      state.displayModal = true;
    },
    hideModal: (state) => {
      state.displayModal = false;
    },
    selectProduct: (state, action) => {
      state.currSelectedProduct = action.payload;
    },
    displayCartContent: (state) => {
      state.displayCart = !state.displayCart;
    },
    addToCart: (state, action) => {
      if (Object.keys(state.cart).length === 0) {
        state.cart[action.payload.title] = [
          { ...action.payload, uuid: uuidv4() },
        ];
        state.count++;
        state.grandTotal += action.payload.price;
      } else {
        if (action.payload.title in state.cart) {
          state.cart[action.payload.title].push({
            ...action.payload,
            uuid: uuidv4(),
          });
          state.count++;
          state.grandTotal += action.payload.price;
        } else {
          state.cart[action.payload.title] = [
            { ...action.payload, uuid: uuidv4() },
          ];
          state.count++;
          state.grandTotal += action.payload.price;
        }
      }
    },
    deleteFromCart: (state, action) => {
      if (action.payload.title in state.cart) {
        if (state.cart[action.payload.title].length > 1) {
          state.cart[action.payload.title].pop();
          state.count--;
          state.grandTotal -= action.payload.price;
        } else {
          delete state.cart[`${action.payload.title}`];
          state.count--;
          state.grandTotal -= action.payload.price;
        }
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getWomenProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getWomenProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getWomenProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getMenProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMenProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getMenProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getJeweleryProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getJeweleryProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getJeweleryProducts.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(getElectronicsProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getElectronicsProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(getElectronicsProducts.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const {
  backToHome,
  displayCartContent,
  showModal,
  hideModal,
  selectProduct,
  addToCart,
  deleteFromCart,
} = storeSlice.actions;

export default storeSlice.reducer;
