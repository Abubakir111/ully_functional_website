// const express = require('express');
// const path = require('path');
// const bodyParser = require('body-parser');
// const { Base64 } = require('js-base64');
// const encode = Base64.encode('bakir');
// console.log(encode);
// const decode = Base64.decode(encode);
// console.log(decode);

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { Base64 } from 'js-base64';
import TelegramBot from 'node-telegram-bot-api';
const botToken = '6313225012:AAF-lWBd2E42ZMS6Um2-l6Y2ynLIOPx1EAI';
const chatId = -4110947322;

const bot = new TelegramBot(botToken);

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const post = [
  {
    userId: 1,
    id: 1,
    title: 'Что такое Express js простыми словами?',
    body: 'js/JavaScript) Express представляет собой популярный веб-фреймворк, написанный на JavaScript и работающий внутри среды исполнения node. js. Этот модуль освещает некоторые ключевые преимущества этого фреймворка, установку среды разработки и выполнение основных задач веб-разработки и развёртывания.'
  },
  {
    userId: 1,
    id: 1,
    title: 'Что это значит JS?',
    body: 'создания интерактивных веб-страниц. Функции JavaScript могут улучшить удобство взаимодействия пользователя с веб-сайтом: от обновления ленты новостей в социальных сетях и до отображения анимации и интерактивных карт.'
  },
  {
    userId: 1,
    id: 1,
    title: 'Что такое CSS простыми словами?',
    body: '— формальный язык декодирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.'
  }
];
const app = express();
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/api/posts', (req, res) => {
  res.json(post);
});
app.post('/api/botTelegram', (req, res) => {
  req.body;
  console.log(req.body);
  const message = `Новая заявка с сайта: ${req.body.botMassage}`;
  bot.sendMessage(chatId, message);
  // bot.sendMessage(chatId, "<b><font color='red'>Красный текст</font></b>", { parse_mode: 'HTML' });
  // bot.sendMessage(
  //   chatId,
  //   `
  //   <html>
  //       <head>
  //           <style>
  //               /* Здесь вставляете ваши стили из файла CSS */
  //               body {
  //                   font-size: 16px;
  //                   color: red;
  //               }
  //           </style>
  //       </head>
  //       <body>
  //           <p>${message}</p>
  //       </body>
  //   </html>`,
  //   { parse_mode: 'HTML' }
  // );
  // res.json({ massege: 'Заявка отправлена на телеграм' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// const TelegramBot = require('node-telegram-bot-api');
// import pkg from 'pg';
// const { Pool } = pkg;
// app.post('/server', (req, res) => {
//   console.log(req.body);
//   users;
//   users.login = Base64.decode(req.body.login);
//   users.password = Base64.decode(req.body.password);
//   res.json({ ...users });
// });
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'Local_db',
//   password: 'admin',
//   port: 5432 // Порт по умолчанию для PostgreSQL
// });
// app.get('/todos', (req, res) => {
//   pool.query('SELECT * FROM local_db_table', (error, results) => {
//     if (error) {
//       console.log(error);
//     }
//     res.status(200).json(results.rows);
//   });
// });

// const post = [
//   {
//     userId: 1,
//     id: 1,
//     title: 'Что такое Express js простыми словами?',
//     body: 'js/JavaScript) Express представляет собой популярный веб-фреймворк, написанный на JavaScript и работающий внутри среды исполнения node. js. Этот модуль освещает некоторые ключевые преимущества этого фреймворка, установку среды разработки и выполнение основных задач веб-разработки и развёртывания.'
//   },
//   {
//     userId: 1,
//     id: 1,
//     title: 'Что это значит JS?',
//     body: 'создания интерактивных веб-страниц. Функции JavaScript могут улучшить удобство взаимодействия пользователя с веб-сайтом: от обновления ленты новостей в социальных сетях и до отображения анимации и интерактивных карт.'
//   },
//   {
//     userId: 1,
//     id: 1,
//     title: 'Что такое CSS простыми словами?',
//     body: '— формальный язык декодирования и описания внешнего вида документа (веб-страницы), написанного с использованием языка разметки (чаще всего HTML или XHTML). Также может применяться к любым XML-документам, например, к SVG или XUL.'
//   }
// ];
// const Admin = {
//   login: 'bakir',
//   password: 'admin'
// };
// let users = {
//   login: '',
//   password: ''
// };
