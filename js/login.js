function mobilemenu() {
  const nav = document.querySelector('.navigation')

  //console.log(nav)

  nav.classList.toggle('open')
}

function logar() {
  let email = document.querySelector('#email')
  let senha = document.querySelector('#senha')
  let msgerror = document.querySelector('#msgerror')

  let listaUser = [
    {
      id: '1',
      name: 'ADMIN',
      email: 'algum@email.com',
      senha: '123456'
    }
  ]

  //console.log(listaUser)
  //console.log(listaUser[0].email)
  //console.log(listaUser[0].senha)
  let userValid = {
    email: '',
    senha: '',
    name: ''
  }

  listaUser.forEach(users => {
    if (
      email.value == listaUser[0].email &&
      senha.value == listaUser[0].senha
    ) {
      window.location.href = 'src/dashboard.html'

      userValid = {
        email: listaUser[0].email,
        senha: listaUser[0].senha
      }
      let token = Math.random().toString(16).substr(2)
      localStorage.setItem('token', token)
      let login = listaUser[0]
      let senha = listaUser[0]

      localStorage.setItem('senha', JSON.stringify(listaUser[0].senha))
      localStorage.setItem('login', JSON.stringify(listaUser[0].name))
    } else {
      msgerror.setAttribute('style', 'display:block')
      msgerror.innerHTML = 'Email ou Senha incorretos'
      email.focus()
    }
  })
}
//console.log(userValid)

function sair() {
  localStorage.removeItem('token')
  localStorage.removeItem('userLogado')
  window.location.href = '../index.html'
}
function loged() {
  let userLog = JSON.parse(localStorage.getItem('login'))
  let senhaLog = JSON.parse(localStorage.getItem('senha'))
  console.log(userLog)
  let usuario = document.querySelector('#usuario')
  let dash = document.querySelector('.dash-box')

  usuario.innerHTML = `${userLog}`

  dash.innerHTML = `
  <div class="dash-perfil">
  <div class="dash-log" >
  <h4>Logado como : </h4>
  <h2>${userLog}</h2>
  <h4>Digite sua nova senha</h4>
          <div class="campos">
          <input
            id="senha"
            class="senha"
            type="text"
            placeholder="${senhaLog}"
            required
          />
          <div class="update">
          <button onclick="updateSenha()">Mudar Senha</button>
        </div>
  </div>
  
  
  
  `
}
loged()
function check() {
  if (localStorage.getItem('token') == null) {
    alert('Acesso negado')
    window.location.href = '../index.html'
  }
}
check()

//===========server==========//
/*
const url = 'http://localhost:5500/api'

function getUsers() {
  axios
    .get(url)
    .then(response => {
      const data = JSON.stringify(response.data)
      console.log(data)
    })

    .catch(error => console.log(error))
}

function getUser() {
  axios
    .get(`${url}/1`)

    .then(response => {
      const data = response.data

      console.log(data)
    })
    .catch(error => console.log(error))
}

function updateSenha() {
  let senha = document.querySelector('#senha').value

  let newSenha = senha
  console.log(newSenha)
  axios
    .put(`${url}/1`, newSenha)
    .then(response => {
      console.log(response.data)
    })
    .catch(error => console.error(error))
}
*/
