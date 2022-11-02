const home = `
<div class="modal-wrapper {{wrapperClass}}">
    <h2 class="modal-wrapper-text">Добро пожаловать!</h2>
    <div class="btn btn-secondary">
        <a href="/login.html" class="btn-link ">Войти</a>
    </div>
    <div class="btn btn-primary">
        <a href="/signup.html" class="btn-link ">Создать аккаунт</a>
    </div>

</div>
<div class="link-wrapper"><a href="{{link}}" class="link-auth" ">{{linkText}}</a></div>
`;

export default home;
