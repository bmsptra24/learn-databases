import express from 'express'
import { findAllData } from './mysql.js'
const app = express()
const port = 3000

app.get('/', async (req, res) => {
  //   res.send('Hello World!')
  const response = await findAllData(res)
  console.log(response.map((e) => e.nama))
  res.send(response.map((e) => e.nama))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port} | http://localhost:3000/`)
})

// const getData = async () => {
//   let result
//   const state = (response) => {
//     result = response
//   }
// //   await findAllData(state)
//   console.log(result)
// }

// getData()
