const field = `
{{#if labelDisable}}
{{else}}
<label class="field-label {{labelClasses}}">{{label}}</label>
{{/if}}
<input type="{{type}}" class="field-input {{inputClasses}} " name="{{name}}" placeholder="{{placeholder}}">
<span class="tooltip tooltip-hidden">{{text}}</span>
`;
export default field;
