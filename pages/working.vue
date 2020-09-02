<template>
  <div>
    Working button
    <button @click="click">{{ i }}</button>
  </div>
</template>
<script>
  export default {
    data: () => ({ i: 0 }),
    methods: {
      click: function () {
        Number.isNaN(this.i) ? false : this.i++;
      }
    },
  }
</script>
