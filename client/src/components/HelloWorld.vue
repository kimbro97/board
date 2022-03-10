<template>
    <div>
        <div class="hello">
            <span class="title">NO</span>
            <span class="title">제목</span>
            <span class="title">작성자</span>
            <span class="title">작성시간</span>
        </div>
        <ListBoard v-for="(value, idx) in boardList" :key="idx" :item="value"/>
      </div>  
</template>

<script>
import axios from 'axios'
import ListBoard from './ListBoard.vue'
export default {
  name: 'HelloWorld',
  data() {
    return {
      boardList: []
    }
  },
  components: {
    ListBoard
  },
  created() {
      this.getboard()
  },
  methods: {
      async getboard() {
          const { data } = await axios.get('http://localhost:3000/api/contents/content')
          this.boardList = [...data.content]
          console.log(this.boardList)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.title {
  padding-left: 30px;
  padding-right: 30px ;
}
</style>
