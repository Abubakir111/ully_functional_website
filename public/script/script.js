import { encode, decode } from '/js-base64/base64.mjs';

const body = document.querySelector('body');
const headerAuthorizationBtn = document.querySelector('#header__authorizationBtn');
const authorizationFormBtn = document.querySelector('#authorizationFormBtn');
const authorizationForm = document.querySelector('#authorizationForm');
const header = document.querySelector('#header');
const headerToComeInBtn = document.querySelector('#header__toComeInBtn');
const toComeForm = document.querySelector('#toComeForm');
const toComeFormBtn = document.querySelector('#toComeFormBtn');
const toComeFormCross = document.querySelector('#toComeFormCross');
const authorizationFormCross = document.querySelector('#authorizationFormCross');
const postBtn_telegram_bot = document.querySelector('#test_telegram_btn');

const get_fetch = async () => {
  const resposte = await fetch('api/posts');
  const data = await resposte.json();
  console.log(data);
  const blockPost = document.querySelector('.post');
  data.forEach((elem) => {
    const postCart = document.createElement('div');
    postCart.classList.add('post_cart');
    const postTitle = document.createElement('h1');
    postTitle.classList.add('post__title');
    postTitle.textContent = elem.title;
    const postbody = document.createElement('div');
    postbody.classList.add('post__body');
    postbody.textContent = elem.body;
    postCart.appendChild(postTitle);
    postCart.appendChild(postbody);
    blockPost.appendChild(postCart);
  });
};
const post_fetch = async () => {
  const resposte = await fetch('/api/botTelegram', {
    method: 'POST',
    body: JSON.stringify({
      botMassage: 'тестовый отправка заявки в  группу  телеграм'
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  });
  const data = await resposte.json();
};
get_fetch();
postBtn_telegram_bot.addEventListener('click', () => post_fetch);

const closeForm = (form) => {
  body.classList.remove('body-hidden');
  header.classList.remove('header__filter');
  form.classList.remove('show-flex');
  headerAuthorizationBtn.classList.remove('header__btn-inactive');
  headerToComeInBtn.classList.remove('header__btn-inactive');
};
const openForm = (form) => {
  body.classList.add('body-hidden');
  header.classList.add('header__filter');
  form.classList.add('show-flex');
  headerAuthorizationBtn.classList.add('header__btn-inactive');
  headerToComeInBtn.classList.add('header__btn-inactive');
};
toComeFormCross.addEventListener('click', () => {
  closeForm(toComeForm);
});
authorizationFormCross.addEventListener('click', () => {
  closeForm(authorizationForm);
});
headerToComeInBtn.addEventListener('click', () => {
  openForm(toComeForm);
  toComeIn();
});
toComeFormBtn.addEventListener('click', () => {
  closeForm(toComeForm);
});
const toComeIn = () => {};
headerAuthorizationBtn.addEventListener('click', (e) => {
  openForm(authorizationForm);
});
authorizationFormBtn.addEventListener('click', (e) => {
  post_user(e);
});
const post_user = (e) => {
  const inputNote = e.target.parentElement.querySelectorAll('input');
  if (inputNote[0].value == '' || inputNote[1].value == '') {
    e.target.parentElement.querySelector('.filling-form__error').classList.add('show');
  } else {
    closeForm(authorizationForm);
    const login = encode(inputNote[0].value);
    const password = encode(inputNote[1].value);
    const post_fetch = async () => {
      const resposte = await fetch('/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ login: login, password: password })
      });
      const data = await resposte.json();
      console.log(data);
      alert(data.massege);
      authorizationBtn.classList.add('none');
      document.querySelector('.header__avatar').classList.add('show');
    };
    post_fetch();
  }
};
