window.onload = () => {
    document.querySelector('#excuse').innerHTML = generator();
};

let generator = () => {

    let who = ['The dog','My grandma','His turtle','My bird'];
    let action = ['ate','peed','crushed','broke'];
    let what = ['my homework', 'the keys', 'the car'];
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let rm1 = Math.floor(Math.random() * who.length);
    let rm2 = Math.floor(Math.random() * action.length);
    let rm3 = Math.floor(Math.random() * what.length);
    let rm4 = Math.floor(Math.random() * when.length);

    return who[rm1] + ' ' + action[rm2] + ' ' + what[rm3] + ' ' + when[rm4];
};