import IUserService from './i-user-service'

export default class MockUserService implements IUserService {
  getUsersAsync() {
    return new Promise(resolve => resolve([
      {
        name: 'user1',
        description: 'user1 from mock'
      }, {
        name: 'user2',
        description: 'user2 from mock'
      }
    ]))
  }
}