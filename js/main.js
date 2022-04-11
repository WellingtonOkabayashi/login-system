const express = require('express')
const cors = require('cors')
const axios = require('axios')
const app = express()

app.use(cors())

let apiUrl =
  'https://wellingtonokabayashi.github.io/login-system/api/index.json'

app.get('/', async (req, res) => {
  try {
    const { data } = await axios(
      'https://wellingtonokabayashi.github.io/login-system/api/index.json'
    )
    //console.log(data.users)

    return res.json(data.users)
  } catch (error) {
    console.log(error)
  }
})

app.route(apiUrl).put((req, res) => {
  const userId = req.params.id

  const user = users.find(user => Number(user.id) === Number(userId))
  console.log(user)
  if (!user) {
    return res.json('User nor found!')
  }

  const updatedUser = {
    ...user,

    email: req.body.email,
    senha: req.body.senha
  }

  users = users.map(user => {
    if (Number(user.id) === Number(userId)) {
      user = updatedUser
    }
    return user
  })

  res.json('Updated user')
})

app.route('/:id').delete((req, res) => {
  const userId = req.params.id

  users = users.filter(user => Number(user.id) !== Number(userId))

  res.json('Deleted User')
})

app.listen(5500, () => console.log('Rodando na porta 5500'))
