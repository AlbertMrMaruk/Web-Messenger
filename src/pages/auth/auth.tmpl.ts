const tmp = `
<div class="modal-wrapper {{wrapperClass}}">
    <h2 class="modal-wrapper-text">{{method}}</h2>
    <form class="auth-form" action="">
        {{{field1}}}
        {{{field2}}}
        {{{field3}}}
        {{{field4}}}
        {{{field5}}}
        {{{field6}}}
        {{{field7}}}
        {{{btnContext}}}
    </form>
    
</div>
<div class="link-wrapper">
{{{link}}}
<a href="{{link}}" class="link-auth" ">{{linkText}}</a></div>
`;

export default tmp;
