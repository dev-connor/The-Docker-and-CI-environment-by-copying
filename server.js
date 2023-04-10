// Express 모듈 불러오기
const express = require('express')
const redis = require('redis')

// Express App 생성하기
const app = express()

// 레디스 클라이언트 생성
const client = redis.createClient({
  host: 'redis-server',
  port: 6379,
})

app.get('/', (req, res) => {
  res.send('안녕하세요')
})

// Express App 시작하기
app.listen(8080, () => {
  console.log('애플리케이션이 실행됐습니다.')
})
