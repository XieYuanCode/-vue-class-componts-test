<template>
  <div class="hello"><hr>
    <p>data</p>
    <h1>localDate: {{ localDate }}</h1>
    <h1>localText: {{ localText }}</h1><br><hr>
    <p>computed value</p>
    <h1>formattedDate: {{ formattedDate }}</h1><br><hr>
    <p>change dm Data</p>
    <h1>this.dm.UserName: {{ this.dm.UserName }}</h1>
    <h1>this.dm.AccountNumber: {{ this.dm.AccountNumber }}</h1>
    <h1>this.dm.Amount: {{ this.dm.Amount }}</h1>
    <button @click="submit">change data</button><br><br><br><hr>
    <p>prop value</p>
    <h1>props title: {{ this.title }}</h1>
    <h1>props msg: {{ this.msg }}</h1><br><hr>
    <button @click="test">test</button>
  </div>
</template>

<script lang="ts" src="./Hello.vue.ts">

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
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
