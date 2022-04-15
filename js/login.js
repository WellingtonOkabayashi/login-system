function mobilemenu() {
  const nav = document.querySelector('.navigation')

  //console.log(nav)

  nav.classList.toggle('open')
}
const apiUrl =
  'https://wellingtonokabayashi.github.io/login-system/api/index.json'

//verification()

async function logar() {
  /*await axios
    .get(apiUrl)

    .then(response => {
      const usuario = response.data
      console.log(usuario)
      
      
      localStorage.setItem('senhadb', usuario.senha)
      
    })

*/
  verification()
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

  function verifyUser(users) {
    for (let user of users) {
      if (email.value == user.email && senha.value == user.senha) {
        window.location.href = 'src/dashboard.html'

        localStorage.setItem('emaildb', user.email)
        localStorage.setItem('namedb', user.name)

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
  }
  let email = document.querySelector('#email')
  let senha = document.querySelector('#senha')
  let msgerror = document.querySelector('#msgerror')

  let userValid = {
    email: '',
    senha: '',
    name: ''
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
