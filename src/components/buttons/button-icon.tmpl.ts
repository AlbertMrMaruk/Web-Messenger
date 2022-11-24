const buttonIcon = `
    <div class="{{wrapperClass}}">
    {{#if link}}
      <a href="{{link}}" class="btn-link">
        <i class="{{innerClass}}"></i>
      </a>
    {{else}}
    <i class="{{innerClass}}"></i>
    {{/if}}
    </div>
`;
export default buttonIcon;
