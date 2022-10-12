export const tmp = `
<div class="modal-wrapper {{wrapperClass}}">
    <h2>{{method}}</h2>
    <form action="">
        {{#each inputs}}
            {{> myField this}}
        {{/each}}
    </form>
    {{> myBtn btnContext}}
</div>
<div class="link-wrapper"><a href="{{link}}" class="link-auth" ">{{linkText}}</a></div>
`;
