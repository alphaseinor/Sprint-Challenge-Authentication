const request = require('supertest')
const server = require('./server.js')

//errors out without these
const authenticate = require('../auth/authenticate-middleware.js')
const Users = require('../auth/users-model')
const db = require('../database/dbConfig')

describe('server.js', () => {
   describe('/api/jokes', () => {
      it('Returns 401 when not logged in', async () => {
         const response = await request(server).get('/api/jokes')
         expect(response.status).toBe(401)
      })

      it.skip('Logs in user allows access to jokes', async () => {
         return await request(server)
            .post('/api/auth/login')
            .send({ username: 'yosef', password: 'kohlscoh' })
            .then(res => {
               const token = res.body.token
               return request(server)
                  .get('/api/jokes')
                  .set("Authorization", token)
                  .then(res => {
                     expect(res.status).toBe(200)
                     expect(Array.isArray(res.body)).toBe(true)
                  })
            })
      })
   })
    describe('/api/jokes', () => {
      it('Returns json format', () => {
          request(server).get('/api/jokes').then(res => {
            expect(res.type).toMatch(/json/gi)
          })
      })
    })

   describe('/api/auth/login', () => {
      it('Returns json format', function (done) {
         request(server)
            .post('/api/auth/login')
            .send({ username: 'yosef', password: 'kohlscoh' })
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/gi)
            .end(function (err, res) {
               if (err) return done(err)
               done()
            })
      })

      it('Returns 200 and credentials', () => {
         request(server)
            .post(`/api/auth/login`)
            .send({ username: 'yosef', password: 'kohlscoh' })
            .then(res => {
               expect(res.status).toBe(200)
               expect(res.body.message).toBe("Welcome yosef")
            })
      })
   })

   describe('/api/auth/register', function () {
      it('responds 201 and json format', function () {
         request(server)
            .post('/api/auth/register')
            .send({ username: 'ford', password: 'prefect' })
            .then(res => {
               expect(res.status).toBe(201)
               expect(res.type, /json/gi)
            })
      })
   })
})