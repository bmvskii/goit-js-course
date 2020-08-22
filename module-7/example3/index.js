document.addEventListener("DOMContentLoaded", () => {
    const img = document.createElement('img');
    const h1 = document.createElement('h1');

    h1.textContent = 'Hello World!';

    img.setAttribute('src', 'https://images.unsplash.com/photo-1597873815717-7aead3efe5ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2125&q=80');
    img.setAttribute('alt', "Куча ромашек");

    // console.log(img);
    // console.log(h1);

    // document.body.appendChild(img);
    // document.body.appendChild(h1);

    const paragraph = document.createElement('p');
    paragraph.textContent = 'Paragraph';

    // document.body.insertBefore(p, null);

    document.body.append(img, h1);
    document.body.prepend(paragraph);

    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper wrapper--main';
    
    const paragraph2 = document.createElement('p');
    paragraph2.textContent = 'Wrapper paragraph';

    wrapper.appendChild(paragraph2);

    const wrapper2 = wrapper.cloneNode(true);

    img.before(wrapper);
    h1.after(wrapper2);

    wrapper2.remove();

    // wrapper2.parentElement.removeChild(wrapper2);
    
    document.body.innerHTML = `
        <h2 class="title">Title</h2>
        <ul onclick="alert('Hello world!');">
            <li>01</li>
            <li>02</li>
            <li>03</li>
            <li>04</li>
        </ul>
    `;
    document.body.innerHTML += `<p>12312312  dsasdas</p>`;

    const list = document.querySelector('ul');
    const thirdLi = document.querySelector('ul > li:nth-child(3)');

    const title = document.querySelector('h2');

    // title.onclick = (event) => {
    //     console.log(event);
    // }

    // title.onclick = (event) => {
    //     console.log("Hello world!");
    // };

    const logEvent = (e) => console.log(e);
    const helloWorldFunction = (e) => {
        console.log("Hello world!");
        title.removeEventListener('click', helloWorldFunction);
    }

    title.addEventListener('click', logEvent);
    title.addEventListener('click', helloWorldFunction);

    list.insertAdjacentHTML('beforebegin', '<span>1</span>');
    list.insertAdjacentHTML('afterbegin', '<span>2</span>');
    list.insertAdjacentHTML('beforeend', '<span>3</span>');
    list.insertAdjacentHTML('afterend', '<span>4</span>');
});