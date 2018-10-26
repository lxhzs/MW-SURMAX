import axios from 'axios'
import querystring from 'querystring'
import config from '../config'

const http = {
  get: (path, params) => {
    return new Promise((resolve, reject) => {
      axios.get(config.apiUrl + path, { params: params }).then(res => {
        if (res.status === 200) {
          let data = res.data
          if (data.code === '0') {
            console.log(data.data)
            return resolve(data.data)
          } else {
            return reject(data.message)
          }
        } else {
          return reject(res.statusText)
        }
      }, reject)
    })
  },
  post: (path, params) => {
    return new Promise((resolve, reject) => {
      let data = querystring.stringify(params)
      axios
        .post(config.apiUrl + path, data, {
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          }
        })
        .then(res => {
          if (res.status === 200) {
            let data = res.data
            if (data.code === '0') {
              console.log(data.data)
              return resolve(data.data)
            } else {
              return reject(data.message)
            }
          } else {
            return reject(res.statusText)
          }
        }, reject)
    })
  }
}

export default http
