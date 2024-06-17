<script setup>
import { inject } from 'vue'
// 2. 接收資料
const roomData = inject('data-key')
// 接收響應式資料
const countData = inject('count-key')
// 接收方法
const setCount = inject('setCount-key')
</script>
<template>
  <div class="comment">
    底層組件
    <div>
        來自頂層組件中的資料為：{{ roomData }}
    </div>
    <div>
        來自頂層組件的響應式資料：{{ countData }}
    </div>
    <div>
        <button @click="setCount">修改頂層組件的資料</button>
    </div>
  </div>
</template>

<style scoped>
.comment {
    margin-top: 20px;
    margin-left: 40px;
}
</style>