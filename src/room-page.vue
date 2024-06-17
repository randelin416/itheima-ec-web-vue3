<script setup>
import { ref, provide } from 'vue'
import RoomMsgItem from './room-msg-item.vue'
// 組件嵌套關係：
// RoomPage -> RoomMsgItem -> RoomMsgComment

// 1. 頂層組件提供資料
provide('data-key', 'this is room data')

// 傳遞響應式資料
// count不可跨頁面修改
const count = ref(0)
provide('count-key', count)
setTimeout(() => {
    count.value = 100
}, 3000)

// 傳遞方法(可通知修改頂層資料 [誰的資料誰負責])
const setCount = () => {
    count.value++
}
provide('setCount-key', setCount)
</script>
<template>
  <div class="page">
    頂層組件
    <RoomMsgItem />
  </div>
</template>