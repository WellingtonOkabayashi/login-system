function mobilemenu() {
  const nav = document.querySelector('.navigation')

  //console.log(nav)

  nav.classList.toggle('open')
}
const apiUrl =
  'https://wellingtonokabayashi.github.io/login-system/api/index.json'

async function logar() {
  async function verification() {
    try {
      const response = await fetch(apiUrl)
      //console.log(response)
      const data = await response.json()

      let users = data

      verifyUser(users)
      //console.log(usuarios)
    } catch (error) {
      console.log(error)
    }
  }

  verification()

  function verifyUser(users) {
    let email = document.querySelector('#email')
    let senha = document.querySelector('#senha')
    let msgerror = document.querySelector('#msgerror')

    for (let user of users) {
      if (email.value == user.email && senha.value == user.senha) {
        let token = Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('email', user.email)
        localStorage.setItem('name', user.name)

        window.location.href = 'src/dashboard.html'
      }
    } //for user
  } //function users
  if (email || senha == null) {
    msgerror.setAttribute('style', 'display:block')
    msgerror.innerHTML = 'Login Incorreto'
    email.focus()
  }
} //function logar

//
function sair() {
  localStorage.removeItem('token')

  localStorage.removeItem('name')
  localStorage.removeItem('senha')
  localStorage.removeItem('email')
  window.location.href = '../index.html'
}
function loged() {
  let userLog = localStorage.getItem('name')

  let emailLog = localStorage.getItem('email')
  //console.log(userLog)
  let usuario = document.querySelector('#usuario')
  let dash = document.querySelector('.dash-box')

  usuario.innerHTML = `${userLog}`

  dash.innerHTML = `
  <div class="dash-perfil">
  <div class="dash-log" >
  <h4>Logado com o email: </h4>
  <h2>${emailLog}</h2>
  <h4>Status do Usuário: </h4>
  <h2>${userLog}</h2>

  
           
          <div class="update">
          <button onclick="sair()">SAIR</button>
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
