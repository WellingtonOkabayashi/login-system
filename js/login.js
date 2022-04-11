function mobilemenu() {
  const nav = document.querySelector('.navigation')

  //console.log(nav)

  nav.classList.toggle('open')
}
const apiUrl =
  'https://wellingtonokabayashi.github.io/login-system/api/index.json'

async function logar() {
  await axios
    .get(apiUrl)
    .then(response => {
      const usuario = response.data.users
      // console.log(usuario[0])
      localStorage.setItem('emaildb', usuario[0].email)
      localStorage.setItem('namedb', usuario[0].name)
      localStorage.setItem('senhadb', usuario[0].senha)
    })

    .catch(error => console.log(error))

  let email = document.querySelector('#email')
  let senha = document.querySelector('#senha')
  let msgerror = document.querySelector('#msgerror')

  let userValid = {
    email: '',
    senha: '',
    name: ''
  }

  if (
    email.value == localStorage.getItem('emaildb') &&
    senha.value == localStorage.getItem('senhadb')
  ) {
    window.location.href = 'src/dashboard.html'

    userValid = {
      email: localStorage.getItem('emaildb'),
      senha: localStorage.getItem('senhadb')
    }

    let token = Math.random().toString(16).substr(2)
    localStorage.setItem('token', token)
  }
  //
  else {
    msgerror.setAttribute('style', 'display:block')
    msgerror.innerHTML = 'Email ou Senha incorretos'
    email.focus()
  }
}
//console.log(userValid)

//
function sair() {
  localStorage.removeItem('token')

  localStorage.removeItem('namedb')
  localStorage.removeItem('senhadb')
  localStorage.removeItem('emaildb')
  window.location.href = '../index.html'
}
function loged() {
  let userLog = localStorage.getItem('namedb')

  let emailLog = localStorage.getItem('emaildb')
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
