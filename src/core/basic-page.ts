import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { Data } from 'aui-vue-decorator'

export default abstract class BasicPage<TDataModel> extends Vue {
  @Data() dm: TDataModel

  /**
   * create instance of BasicPage
   */
  constructor() {
    super()
  }

  created() {
    console.log('on created in basic page')
  }
}