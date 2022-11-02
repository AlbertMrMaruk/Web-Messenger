const home = `
<div class="modal-wrapper {{wrapperClass}}">
    <h2 class="modal-wrapper-text">Добро пожаловать!</h2>
    <div class="btn btn-secondary">
        <a href="/login.html" class="btn-link ">Войти</a>
    </div>
    <div class="btn btn-primary">
        <a href="/signup.html" class="btn-link ">Создать аккаунт</a>
    </div>
    <div class="btn btn-primary">
        <a href="/chats.html" class="btn-link ">Страница чата</a>
    </div>
    <div class="btn btn-primary">
        <a href="/profile.html" class="btn-link ">Страница профиля</a>
    </div>
    <div class="btn btn-primary">
        <a href="/404.html" class="btn-link ">Страница 404</a>
    </div>
    <div class="btn btn-primary">
    <a href="/500.html" class="btn-link ">Страница 500</a>
</div>

</div>
<div class="link-wrapper"><a href="{{link}}" class="link-auth" ">{{linkText}}</a></div>
`;

export default home;
