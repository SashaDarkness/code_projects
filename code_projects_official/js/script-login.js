const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
// const iconClose = document.querySelector('.icon-close');

//action do registre-se
registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

//action para logar
loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});


const form = document.getElementById("form-box")
const username = document.getElementById("username")
const email = document.getElementById("email")
const mail = document.getElementById("mail")
const senha = document.getElementById("senha")
const password = document.getElementById("password")

form.addEventListener('submit', (e) => {
    //remove o comportamento padrão do brower de salvar login
    e.preventDefault();
    checkInputs();


});

//cadastro
 function checkInputs() {
   //trim() -> remove todos os espaçamentos em branco inseridos
   const usernameValue = username.value.trim();
   const mailValue = mail.value.trim();
   const passwordValue = password.value.trim();

  if (usernameValue === '') {
    //mostrar erro
  } else {
    //
  }
 }



//verificacao login
function logar(){
  var email = document.getElementById("email").value;
  var senha = document.getElementById("senha").value;

  if (email == "sashacaroline17@gmail.com" && senha == "admin") {
    alert('Logado com sucesso!')
    location.href = "perfil.html";
  } else {
    alert('Dados Inválidos. Insira-os novamente!')
    location.href = "login.html";
  }

}
