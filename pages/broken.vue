<template>
  <div>
    Broken button
    <button @click="Number.isNaN(i) ? false : i++">{{ i }}</button>
  </div>
</template>
<script>
  export default {
    data: () => ({ i: 0 })
  }
</script>
