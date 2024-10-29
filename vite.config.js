import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@redux': path.resolve(__dirname, './src/redux'),
			'@assets': path.resolve(__dirname, './src/assets'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@shared': path.resolve(__dirname, './src/shared'),
			'@modules': path.resolve(__dirname, './src/modules'),
			sharedStyles: path.resolve(__dirname, './src/styles/sharedStyles.scss'),
		},
	},
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@use "@/styles/mixins.scss";`,
			},
		},
	},
})
