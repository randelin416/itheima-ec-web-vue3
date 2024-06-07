// 創建一個應用實例對象
import './assets/main.css' 

import { createApp } from 'vue'
import App from './App.vue'

// 1. 以App作為參數生成一個應用實例對象
// 2. 掛載到id為app的節點上
createApp(App).mount('#app')
