const modal = `
<div class="modal-window {{#if modalOff}} hidden{{/if}} {{wrapperClass}}">
     <div class="modal-window-wrapper"> 
        <h2>{{header}}</h2>
        <form id="avatar-form">
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
        {{else}}
        <input id="avatar" type="file" name="avatar" accept="image/*" class="avatar-input">
        
        {{/if}}
        {{{submit}}}
        </form>
        {{{buttonIcon}}}
     </div>
</div>
`;
export default modal;
