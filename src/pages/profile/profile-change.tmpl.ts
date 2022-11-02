const profileChange = `
<div class="modal-wrapper profile-wrapper">
  <div class="container">
    <div class="avatar-wrapper">
        <img src="https://thumbs.dreamstime.com/b/%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8C-%D1%81%D0%BC%D0%B8-%D0%B2%D0%B5%D0%BA%D1%82%D0%BE%D1%80%D0%B0-%D0%B7%D0%BD%D0%B0%D1%87%D0%BA%D0%B0-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D1%8B-%D0%BF%D0%BE-%D1%83%D0%BC%D0%BE%D0%BB%D1%87%D0%B0%D0%BD%D0%B8%D1%8E-176256935.jpg" alt="Изображение профиля" class="avatar-wrapper-img">
        <p class="avatar-wrapper-text">{{name}}</p>
    </div>
    <form class="profile-form">
    {{{field1}}}
    {{{field2}}}
    {{{field3}}}
    {{{field4}}}
    {{{field5}}}
    {{{field6}}}
    </form>
    {{{btnContext}}}
    </div>
    <div class="btn btn-secondary btn-circle btn-circle-profile">
    <a href="/" class="btn-link "></a>
    </div>
</div>
`;

export default profileChange;
