let request = require('request')
let baseUrl = 'http://localhost:8001/'

describe('Blog Post API Reference', function () {
  describe('GET /api/posts', function () {
    it('returns status code 200.', function (done) {
      request.get(baseUrl + 'posts', function (err, response, body) {
        expect(response.statusCode).toBe(200)
        done()
      })
    })
    /*it('returns id, title, categories', function (err, response, body) {
      request.get(baseUrl + 'posts', function (err, response, body) {
        let header = Object.keys(body)
        expect(header.indexOf('content')).toEqual(40)
        done()
      })
    })*/
    it('returns 40 most recent post except content.', function (done) {
      request.get(baseUrl + 'posts', function (err, response, body) {
        console.log(body)
        expect(body.length).toEqual(40)
        done()
      })
    })
  })
})
