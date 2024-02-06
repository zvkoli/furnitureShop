import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct } from "@/types/IProduct";

const initialState: IProduct[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, action: PayloadAction<IProduct[]>) => {
      return action.payload;
    },
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      const productIndex = state.findIndex((item) => item.id === product.id);

      if (productIndex !== -1) {
        state = state.map((item, index) =>
          index === productIndex
            ? {
                ...item,
                count: item.count + 1,
                price: item.price * (item.count + 1),
              }
            : item
        );
      } else {
        const updatedProduct = { ...product, count: 1 };
        state = [...state, updatedProduct];
      }

      return state;
    },
  },
});

export const { setCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
