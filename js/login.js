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
      const usuario = response.data
      //console.log(usuario[0])
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
function update() {
  let newEmail = document.querySelector('#email').value
  let newSenha = document.querySelector('#senha').value

  //console.log(newEmail)
  //console.log(newSenha)
  if (newSenha == '' || newEmail == '') {
    alert('Digite seu novo Email e senha')
  } else {
    axios
      .put(apiUrl, newSenha && newEmail)
      .then(response => alert('sucesso'))
      .catch(error => console.log(error))

    //window.location.href = 'dashboard.html'
  }
}

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
  let senhaLog = localStorage.getItem('senhadb')
  let emailLog = localStorage.getItem('emaildb')
  //console.log(userLog)
  let usuario = document.querySelector('#usuario')
  let dash = document.querySelector('.dash-box')

  usuario.innerHTML = `${userLog}`

  dash.innerHTML = `
  <div class="dash-perfil">
  <div class="dash-log" >
  <h4>Logado como : </h4>
  <h2>${userLog}</h2>
  <h4>Digite seu novo Email</h4>
          <div class="campos">
          <input
            id="email"
            class="email"
            type="email"
            placeholder="${emailLog}"
            required
          />
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
          <button onclick="update()">Atualizar Usuário</button>
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
