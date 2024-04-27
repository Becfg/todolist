import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
import {VantResolver} from "@vant/auto-import-resolver";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver(), VantResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(), VantResolver()],
        }),
    ],
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
})
