<script setup>
// 語法糖寫法(多+setup)
const message = 'this is a message'
const logMessage = () => {
  console.log(message)
}

// 一般寫法(vue2)
// export default {
//   setup () {
//     console.log('setup')
//     const message = 'this is a message'
//     const logMessage = () => {
//       console.log(message)
//     }
//     return {
//       message,
//       logMessage
//     }
//   },
//   beforeCreate () {
//     console.log('beforeCreate')
//   }
// }
</script>

<template>
  <div>
    {{ message }}
    <button @click="logMessage"> log </button>
  </div>
</template>