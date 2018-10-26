// 发布版本
const bundleVersion = '20181024'

// 环境模式 dev test production
const environment = 'dev'

// api请求地址
const baseUrl = {
  dev: 'http://192.168.1.129:8810/',
  test: '',
  production: ''
}

export default {
  version: bundleVersion,
  apiUrl: baseUrl[environment]
}
