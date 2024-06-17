<!-- <script setup>
//2. defineProps接收數據
const props = defineProps({
    message: String,
    count: Number
})
console.log(props)
</script>
<template>
  <div class="son">
    <h3>子組件Son</h3>
    <div>
        父組件傳入的資料 - {{ message }} - {{ count }}
    </div>
  </div>
</template> -->

<script setup>
//2. 通過defineEmits() -> emit(this.$emit)接收數據
const emit = defineEmits(['get-message'])
const sendMsg = () => {
    //TODO: 觸發自定義事件 傳資料給父組件
    emit('get-message', 'this is son message')
}
</script>
<template>
  <div class="son">
    <div>子組件Son</div>
    <button @click ="sendMsg">觸發自定義事件</button>
  </div>
</template>
