-webkit- для Safari, Chrome и Opera
-moz- для Firefox

<!-- -ms- для Internet Explorer -->

-o- для старых версий Opera

Популярные браузеры, где может потребоваться использование вендорных префиксов: Google Chrome, Mozilla Firefox, Safari, Opera, Microsoft Edge, Internet Explorer.

Обратите внимание, что с появлением более современных версий браузеров и стандартизации CSS, большинство вендорных префиксов становятся менее необходимыми. Однако, для обеспечения поддержки устаревших версий браузеров и устройств, иногда все еще необходимо использовать вендорные префиксы

1. flexbox:
   -webkit-box-orient: horizontal; /_ Safari, Chrome, Opera _/
   display: -webkit-box; /_ Safari, Chrome, Opera _/
   display: -moz-box; /_ Firefox _/
   display: -ms-flexbox; /_ Internet Explorer _/
   display: flex; /_ Стандарт _/

2. анимации:
   -webkit-animation: slidein 3s ease infinite; /_ Safari, Chrome, Opera _/
   -moz-animation: slidein 3s ease infinite; /_ Firefox _/
   -ms-animation: slidein 3s ease infinite; /_ Internet Explorer _/
   animation: slidein 3s ease infinite; /_ Стандарт _/

3. градиенты:
   background: -webkit-gradient(linear, left top, left bottom, from(#1e5799), to(#2989d8)); /_ Safari, Chrome _/
   background: -o-linear-gradient(#1e5799, #2989d8); /_ Opera _/
   background: -moz-linear-gradient(top, #1e5799 0%, #2989d8 100%); /_ Firefox _/
   background: linear-gradient(to bottom, #1e5799 0%, #2989d8 100%); /_ Стандарт _/

4. тени:
   -webkit-box-shadow: 3px 3px 5px 6px #ccc; /_ Safari, Chrome _/
   -moz-box-shadow: 3px 3px 5px 6px #ccc; /_ Firefox _/
   box-shadow: 3px 3px 5px 6px #ccc; /_ Стандарт _/

Но с развитием современных стандартов и общей поддержки браузерами, большинство из этих свойств уже не требуют вендорных префиксов для большинства браузеров.

safari

1. max-content:
   -webkit-max-content;
1. Градиенты:
   -webkit-linear-gradient
   -webkit-radial-gradient

1. Анимации:
   -webkit-animation
   -webkit-keyframes

1. Тени:
   -webkit-box-shadow

1. Flexbox:
   -webkit-box-orient
   -webkit-box-pack
   -webkit-box-align

1. Текстовые обтекания:
   -webkit-wrap-flow
   -webkit-wrap-margin
   -webkit-wrap-padding

1. Прокрутка:
   -webkit-overflow-scrolling

1. Колоночный макет:
   -webkit-column-count
   -webkit-column-width
   -webkit-column-gap

1. Псевдоэлементы:
   -webkit-input-placeholder
   -webkit-search-cancel-button
   -webkit-search-decoration
   -webkit-search-results-button
   -webkit-search-results-decoration

1. Таблицы:
   -webkit-border-horizontal-spacing
   -webkit-border-vertical-spacing

1. Масштабирование:
   -webkit-transform
   -webkit-transform-origin




    В Telegram Bot API вы можете использовать ограниченный набор стилей для форматирования текста. Вы можете использовать следующие теги для различных стилей:

1. `<b>текст</b>` - Жирный текст
2. `<i>текст</i>` - Курсив
3. `<u>текст</u>` - Подчеркнутый текст
4. `<a href="URL">текст</a>` - Ссылка

Например, чтобы отправить сообщение с жирным и курсивным текстом, вы можете использовать следующий код:
javascript
const sms_telegram_message = `<b>Жирный текст</b> и <i>курсивный текст</i>`;
bot.sendMessage(chatId, sms_telegram_message, { parse_mode: 'HTML' });
