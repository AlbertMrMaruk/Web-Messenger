const chat = `
    <div class="chat-wrapper" data-id="{{id}}" id="{{index
    }}">
        <img src="{{#if avatar}} {{avatar}}  {{else}} https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg {{/if}}"  alt="Изображение чата" class="chat-wrapper-img"/>
        <div class="chat-info-wrapper">
            <h3 class="chat-info-wrapper-text"> {{chatName}}</h3>
            {{#if time}}
            <p class="chat-info-wrapper-time text-sm">{{time}}</p>
            {{/if}}
            {{#if message}}
            <p class="chat-info-wrapper-message text-sm text-grey text-left">
            <span class="text-bold ">
                {{sender}}
            </span>
                {{message}}
            </p>
            {{/if}}
        </div>
    </div>
    
`;
export default chat;
