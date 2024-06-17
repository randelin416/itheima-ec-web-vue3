<script setup>
import { ref } from 'vue'

const name = ref('test name')
const setName = () => {
    name.value = 'test new name'
}
// 默認情況下<script setup>語法糖下組件內部的屬性和方法不開放給父組件訪問，可以透過defineExpose宏函數指定那些屬性和方法允許訪問
defineExpose({
    name,
    setName
})
</script>
<template>
    <div>我是test組件</div>
</template>