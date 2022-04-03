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
      email: 'dametchan@gmail.com',
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
      let userLogado = listaUser[0]
      localStorage.setItem('userLogado', JSON.stringify(listaUser[0].name))
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
  let userLog = JSON.parse(localStorage.getItem('userLogado'))

  let usuario = document.querySelector('#usuario')

  usuario.innerHTML = `${userLog}`
}
loged()
function check() {
  if (localStorage.getItem('token') == null) {
    alert('Acesso negado')
    window.location.href = '../index.html'
  }
}
check()
