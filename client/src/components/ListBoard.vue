<template>
        <div>
            <span class="list">{{list}}</span>
        </div>
</template>

<script>
export default {
  name: 'ListBoard',
  props: {
      list: {
          type: String
      }
  },
}
</script>

// <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
padding: 30px;
}
</style>
