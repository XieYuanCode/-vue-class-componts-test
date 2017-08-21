<template>
  <div id="app">
    <component ref="page"
               :is="currentPage" :title="'props data TITLE'"></component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Provide } from 'vue-property-decorator'

import Pages from './pages'
import IUserService from './services/i-user-service'
import MockUserService from './services/mock-user-service'

@Component({ name: 'app' })
export default class App extends Vue {

  @Provide() userService: IUserService = new MockUserService()

  currentPage: any
  currentDataModel: any

  created() {
    let dmFromFlow = {
      UserName: 'foo',
      AccountNumber: '123456789',
      Amount: 10000,
      Address: 'simple test address'
    }
    this.currentPage = Pages[0].load

    // 模拟PageManager行为
    // Pages[0].load(Page => {
    //   let pageInstance = new Page()
    //   let dm = pageInstance.createDataModel()
    //   for (var key in dmFromFlow) {
    //     dm[key] = dmFromFlow[key]
    //   }
    //   pageInstance.$mount(this.$refs.currentPage)
    // })
  }

  mounted() {
    console.log(this.$refs.page)
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
