<template>
  <div class="hello">
    <div>
      <p>
        <ul>
          <li v-for="mm in data">{{mm}}</li>
        </ul>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Welc',
      data:[12,323,4233,35,644]
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
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
</style>
