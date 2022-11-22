const modal = `
<div class="modal-window {{#if modalOff}} hidden{{/if}} {{wrapperClass}}">
     <div class="modal-window-wrapper"> 
        <h2>{{header}}</h2>
        {{#if inputSearch}}
            {{#if type}}
                <input class="search-input" id="search-users" type="text" placeholder="Поиск" data-type="{{type}}">
            {{/if}}
            <div class="users-wrapper">
                {{#if user1}}
                    {{{user1}}}
                    {{{user2}}}
                    {{{user3}}}
                    {{{user4}}}
                    {{{user5}}}
                    {{{user6}}}
                {{else}}
                    <p class="users-wrapper-text">По вашему запросу не было найдено пользователей!</p>
                {{/if}}
            </div>
        {{/if}}
        {{#if avatarModal}}
            <form id="avatar-form">
            <input id="avatar" type="file" name="avatar" accept="image/*" class="avatar-input">
            {{{submit}}}
            </form>
        {{/if}}
        {{#if inputText}}
            <form id="chatname-form">
                <input class="search-input" name="chatname" type="text" placeholder="Введите название чата">
                {{{submit}}}
            </form>
        {{/if}}
        {{{buttonIcon}}}
     </div>
</div>
`;
export default modal;
