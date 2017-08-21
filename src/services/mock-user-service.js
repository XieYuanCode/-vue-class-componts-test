export default class MockUserService {
    getUsersAsync() {
        return new Promise(resolve => resolve([
            {
                name: 'user1',
                description: 'user1 from mock'
            }, {
                name: 'user2',
                description: 'user2 from mock'
            }
        ]));
    }
}
//# sourceMappingURL=mock-user-service.js.map