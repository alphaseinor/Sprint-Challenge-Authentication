const Users = require('./users-model')
const db = require('../database/dbConfig')

describe('users model', function () {

   beforeEach(async () => {
      await db('users').truncate()
   })

   describe('addUser() method', function () {
      it('should add the user to the db', async function () {
         await Users.addUser({ username: "fred", password: "test" })
         await Users.addUser({ username: "jon", password: "test2" })
         const waitForIt = await db('users')
         expect(waitForIt).toHaveLength(2)
      })
   })
})