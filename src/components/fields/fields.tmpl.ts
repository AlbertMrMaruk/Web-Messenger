const field = `
{{#if labelDisable}}
{{else}}
<label class="field-label {{labelClasses}}">{{label}}</label>
{{/if}}
{{{input1}}}
<span class="tooltip tooltip-hidden">{{text}}</span>
`;
export default field;
