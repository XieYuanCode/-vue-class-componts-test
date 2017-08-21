import { Component, Prop, Inject } from 'vue-property-decorator'
import { Data } from '../utils/decorator.js'
import BasicPage from '../core/basic-page'
import HelloDataModel from './Hello.vue.dm'
import IUserService from '../services/i-user-service'

@Component({ name: 'hello' })
export default class Hello extends BasicPage<HelloDataModel> {

  // properties：不能给默认值
  @Prop() title: string
  @Prop() msg: String

  @Inject() userService: IUserService

  // data: 必须有初始值才能生成代理对象，而且不能是undefined，未定义的话vue无法检测到

  // @Data(data) null
  @Data() localDate: number = 1
  @Data() localText: string = "123"

  // ctor: 必须在构造函数中初始化dm，否则vue无法生成代理对象
  constructor() {
    super()
    this.dm = new HelloDataModel()
  }

  // computed data
  get formattedDate() {
    // return this.localDate
    return this["localDate"] + "+ this is compute value"
  }

  get formattedText() {
    return 2
  }

  // lifetime overrides
  created() {
    super.created()
    console.log('on created in hello: ', this)
    console.log('title: ', this.title)
    console.log('msg: ', this.msg)
  }

  // async mounted() {
  //   this.users = await this.userService.getUsersAsync()
  // }

  // methods
  submit() {
    // this.localDate = new Date()
    // this.localText = new Date().toString()
    // this.localArray[0].name = new Date().toString()

    this.dm.UserName = new Date().toString()
    this.dm.AccountNumber = '6226 0123 4567 9999'
    this.dm.Amount = 500000
    this.dm.Address = 'test address'
  }
}