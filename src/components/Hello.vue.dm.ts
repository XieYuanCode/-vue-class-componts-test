export default class HelloDataModel {
  // properties for ade
  // 必须有初始值vue才能生成代理对象
  UserName = undefined
  AccountNumber = undefined
  Amount = undefined
  Address = undefined
  PhoneNumber = undefined
  Email = undefined
  Test = undefined

  // 采用下面的形式+现在的dm写成prop在外部替换掉，可以生效，但是没有了约束
  // UserName
  // AccountNumber
  // Amount
  // Address
  // PhoneNumber
  // Email
  // Test
}

// 另外一种更优化一些的定义方式，但是这个需要数据字典对数据类型有约束
/*
export default class HelloDataModel {

  // properties for ade
  // 必须有初始值vue才能生成代理对象
  UserName: String = null
  AccountNumber: String = null
  Amount: Number = 0.00
  Address: String = null
}
*/

