<script setup>
import RoomMsgComment from './room-msg-comment.vue';

// 組件嵌套關係：
// RoomPage -> RoomMsgItem -> RoomMsgComment
</script>

<template>
  <div class="page">
    中層組件
    <RoomMsgComment />
  </div>
</template>

<style scoped>
.page {
    margin-top: 20px;
    margin-left: 20px;
}
</style>