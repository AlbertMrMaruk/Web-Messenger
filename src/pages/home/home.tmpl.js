export const home = `
<div class="modal-wrapper {{wrapperClass}}">
    <h2 class="modal-wrapper-text">Добро пожаловать!</h2>
    {{> myBtn btnContext}}
    {{> myBtn btnContext2}}
</div>
<div class="link-wrapper"><a href="{{link}}" class="link-auth" ">{{linkText}}</a></div>
`;
