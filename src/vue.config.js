module.exports={
    css:{
        loaderOptions:{
            sass:{
                prependData:'@import "@/style/mainStyle.scss"'
            }
        }
    }
}

/* import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => ['my-button'].includes(tag),
        }
      }
    })
  ]
}) */