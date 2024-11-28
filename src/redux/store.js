import { configureStore } from '@reduxjs/toolkit'
import statisticsReducer from './Statistics/statisticsSlice'
import { productsReducer } from './Products/productsSlice'
import { shopsReducer } from './Shops/shopsSlice'
import { shopProductsReducer } from './ShopProducts/shopProductsSlise'

export const store = configureStore({
	reducer: {
		statistics: statisticsReducer,
		products: productsReducer,
		shops: shopsReducer,
		shopProducts: shopProductsReducer,
	},
})
