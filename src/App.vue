<!-- 一般寫法(vue2) -->
<!-- <script>
export default {
  setup () {
    console.log('setup')
    const message = 'this is a message'
    const logMessage = () => {
      console.log(message)
    }
    return {
      message,
      logMessage
    }
  },
  beforeCreate () {
    console.log('beforeCreate')
  }
}
</script>
<template>
  <div>
    {{ message }}
    <button @click="logMessage"> log </button>
  </div>
</template> -->

<!-- 語法糖寫法(多+setup) -->
<!-- <script setup>
const message = 'this is a message'
const logMessage = () => {
  console.log(message)
}
</script>
<template>
  <div>
    {{ message }}
    <button @click="logMessage"> log </button>
  </div>
</template> -->

<!-- reactive使用 -->
<!-- <script setup>
// 1. 導入函數
import { reactive } from 'vue'
// 2. 執行函數 傳入一個對象類型的參數 變數接收
const state = reactive({
  count: 0
})
const setCount = () => {
  state.count++
}
</script>
<template>
  <div>
    <button @click="setCount">{{ state.count }}</button>
  </div>
</template> -->

<!-- ref使用 -->
<!-- <script setup>
// 1. 導入函數
import { ref } from 'vue'
// 2. 執行函數 傳入參數[簡單類型 + 對象類型] 變數接收
const count = ref(0)
const setCount = () => {
  count.value++
}
</script>
<template>
  <div>
    <button @click="setCount">{{ count }}</button>
  </div>
</template> -->

<!-- filter -->
<!-- <script setup>
// 原始陣列
const list = ref([1, 2, 3, 4, 5, 6, 7, 8])
// 1. 導入computed
import { computed } from 'vue'
// 2. 執行函數 return計算後之值 變數接收
const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})
// 測試新增數字後兩者是否改變
setTimeout(() => {
  list.value.push(9, 10)
}, 3000)
</script>
<template>
  <div>
    原始陣列 - {{ list }}
  </div>
  <div>
    計算後陣列 - {{ computedList }}
  </div>
</template> -->

<!-- watch -->
<!-- <script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const setCount = () => {
  count.value++
}
// TODO: watch監聽單個來源
// ref對象不須加.value
watch(count, (newVal, oldVal) => {
  console.log('count變化了', newVal, oldVal)
})
</script>
<template>
  <div>
    <button @click="setCount">+{{ count }}</button>
  </div>
</template> -->

<!-- watch多個數據 -->
<!-- <script setup>
import { ref, watch   } from 'vue'
const count = ref(0)
const changeCount = () => {
  count.value++
}
const name = ref('cp')
const changeName = () => {
  name.value = 'pc'
}
// TODO: watch監聽多個來源
watch(
  [count, name],
  (
    [newCount, newName],
    [oldCount, oldName]
  ) => {
    console.log('count或者name變化了', [newCount, newName], [oldCount, oldName])
  }
)
</script>
<template>
  <div>
    <button @click="changeCount">修改count - {{ count }}</button>
  </div>
  <div>
    <button @click="changeName">修改name - {{ name }}</button>
  </div>
</template> -->

<!-- immediate 立即執行 -->
<!-- <script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const setCount = () => {
  count.value++
}
// TODO: watch立即執行
watch(count, () => {
  console.log('count變化了')
}, {
  // 會在初始載入時先執行一次
  immediate: true
})
</script>
<template>
  <div>
    <button @click="setCount"> + {{ count }}</button>
  </div>
</template> -->

<!-- deep：當變數為一對象時 -->
<!-- <script setup>
import { ref, watch } from 'vue'
const state = ref({ count: 0 })
const changeStateByCount = () => {
  // 直接修改count
  state.value.count++
}
// TODO: watch深度監聽
watch(state, () => {
  console.log('count變化了')
}, {
  // 會在初始載入時先執行一次
  // deep: true
})
</script>
<template>
  <div>
    {{ state.count }}
    <button @click="changeStateByCount">通過count修改</button>
  </div>
</template> -->

<!-- deep - 僅監聽精確對象 -->
<!-- <script setup>
import { ref, watch } from 'vue'
const state = ref({
  name: 'Ran',
  age: 18
 })
const changeName = () => {
  // 修改name
  state.value.name = 'I am Ran'
}
const changeAge = () => {
  // 修改age
  state.value.age = 24
}
// TODO: 精確監聽某個具體屬性
watch(
  () => state.value.age,
  () => {
    console.log('age變化了')
  }
)
// deep性能損耗 建議不開啟
</script>
<template>
  <div>當前name - {{ state.name }}</div>
  <div>當前age - {{ state.age }}</div>
  <div>
    <button @click="changeName">修改name</button>
    <button @click="changeAge">修改age</button>
  </div>
</template> -->

<!-- 生命週期函數應用 -->
<!-- <script setup>
// 1. 引入函數
import { onMounted } from 'vue'
// 2. 執行函數 傳入回傳
onMounted(() => {
  console.log('組件掛載完畢mounted執行了1')
  // 原邏輯
})
// 多次執行
onMounted(() => {
  console.log('組件掛載完畢mounted執行了2')
  // 補充邏輯
})
onMounted(() => {
  console.log('組件掛載完畢mounted執行了3')
})
</script> -->

<!-- 組合式API下的父傳子(配合son-com.vue) -->
<!-- <script setup>
// setup 語法下局部組件無須註冊即可使用
import { ref } from 'vue' 
import SonCom from './son-com.vue'
const count = ref(100)
setTimeout(() => {
  count.value = 200
}, 3000)
</script>
<template>
  <div class="father">
    // 1. 綁定屬性(響應式資料前面需加:)
     <SonCom :count="count" message="father message" />
  </div>
</template> -->

<!-- 組合式API下的子傳父(配合son-com.vue) -->
<!-- <script setup>
// setup 語法下局部組件無須註冊即可使用
// import { ref } from 'vue' 
import SonCom from './son-com.vue'
const getMessage = (msg) => {
  console.log(msg)
}
</script>
<template>
  <div class="father">
    <h2>父組件App</h2>
    // 1. 綁定事件
    <SonCom @get-message="getMessage"/>
  </div>
</template> -->

<!-- 模板引用 -->
<!-- <script setup>
import { onMounted, ref } from 'vue';
import TestCom from './test-com.vue'
// 1. 調用ref函數 -> ref對象
const h1Ref = ref(null)
const comRef = ref(null)
// 組件掛載完畢後才能獲取
onMounted(() => {
  console.log(h1Ref.value)
  console.log(comRef.value)
})
</script>
<template>
  // 2. 通過ref標示綁定ref對象
  <h1 ref="h1Ref">我是dom標籤h1</h1>
  <TestCom ref="comRef" />
</template> -->

<!-- provide與inject -->
<script setup>
import RoomPage from './room-page.vue'
</script>
<template>
  <div>
    <RoomPage />
  </div>
</template>



<!-- <script setup>
  
</script>
<template>
  <div>

  </div>
</template> -->