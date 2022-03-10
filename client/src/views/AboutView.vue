<template>
<div>
    <div class="about">
        <span>제목<input type="text" v-model="titleInput"/></span>
    </div>
    <div>
        <span>작성자<input type="text" v-model="authorInput"/></span>
    </div>
    <div>
        <button @click="createBoard">작성</button>
    </div>
</div>  
</template>

<script>
import axios from 'axios'
export default {
    data() {
      return {
          titleInput: "",
          authorInput: ""
      }
    },
    methods: {
    async createBoard() {
        await axios.post('http://localhost:3000/api/contents/content', {
            title: this.titleInput,
            author: this.authorInput
        })
        this.titleInput = ""
        this.authorInput = ""
    }
  }
}
</script>
