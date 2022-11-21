const chats = `
<article class="chats-grid">
<aside>
    <div class="header-wrapper">
    <h1 class="header-wrapper-text">Чаты</h1>
    <a href="/profile">
    {{{avatar1}}}
    </a>
    </div>
    <input class="search-input" type="text" placeholder="Поиск"/>
    {{{chat1}}}
    {{{chat2}}}
    {{{chat3}}}
    {{{chat4}}}
    {{{chat5}}}
    {{{chat6}}}

    {{{btnIcon1}}}
  
</aside>
{{#if chatOn}}
<nav class="nav-wrapper">
        <div class="info-wrapper">
             <img src="https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg" alt="Изображение профиля" class="header-wrapper-img">
             <span class="text-bold info-wrapper-message">
                {{sender}}
            </span>
        </div>
        <div class="icons-wrapper">
        {{{btnIcon2}}} 
        {{{btnIcon3}}}
        </div>
        <div class="tools-wrapper {{#if toolsOff}} hidden {{/if}}">
            <ul class="list-style-none tools-wrapper-ul">
                <li class="tools-wrapper-li">
                {{{link1}}}</li>
                <li class="tools-wrapper-li">{{{link2}}}</li>
            </ul>
        </div>
        
</nav>
<section class="chat-section">
    {{{message1}}}
    {{{message2}}}
    {{{message3}}}
    {{{message4}}}
    {{{message5}}}
    {{{message6}}}
    {{{message7}}}
    {{{message8}}}
    {{{message9}}}
    {{{message10}}}
    {{{message11}}}
    {{{message12}}}
    {{{message13}}}
    {{{message14}}}
    {{{message15}}}
    {{{message16}}}
</section>
<section class="message-section">
        <form class="message-section-form">
            <div class="message-section-form-file"> 
                <input type="file" class="hidden"/>
                <i class="fa-solid fa-link"></i>
            </div>
            
            {{{field1}}}
            <button class="btn btn-secondary btn-circle btn-circle-chats btn-circle-submit" type="submit">
                <i class="fa-solid fa-arrow-right"></i>
            </button>
                

        </form>
</section>
{{else}}
<section class="empty-message-wrapper">
    Выберите чат чтобы отправить сообщение
</section>
{{/if}}


</article>
{{{modal2}}}
{{{modal1}}}
`;

export default chats;
