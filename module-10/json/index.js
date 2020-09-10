document.addEventListener('DOMContentLoaded', () => {
    
    const object = {
        var1: 'string',
        number: 1,
        array: [1, 2, 3, 4],
        object2: {
            var2: true,
        }
    }

    // const stringified = JSON.stringify(object);

    // console.log(object);
    // console.log(stringified);

    // console.log(JSON.parse(stringified));
    const someCookie = 'key=value;';
    
    const userNameCookie = 'username=Volodya;';
    const passwordCookie = 'password=12345678;';

    document.cookie;
});