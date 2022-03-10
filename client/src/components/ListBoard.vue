<template>
        <div>
            <span class="list">{{item._id}}</span>
            <span class="list">{{item.title}}</span>
            <span class="list">{{item.author}}</span>
            <span class="list">{{item.createdAt}}</span>
        </div>
</template>

<script>
export default {
  name: 'ListBoard',
  props: {
      item: {
          type: Object
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
