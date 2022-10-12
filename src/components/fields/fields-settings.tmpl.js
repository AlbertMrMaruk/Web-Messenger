export const fieldSettings = `
    <div class="field-wrapper">
        <label class="field-label {{labelClasses}}">{{label}}</label>
        <input type="{{type}}" class="field-input {{inputClasses}} " name="{{name}}" value="{{value}}" {{#if disabled}}disabled {{/if}}>
    </div>
`;
