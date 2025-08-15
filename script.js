const body = document.querySelector('.body');
const title = document.querySelector('.title');
const btn = document.querySelector('.btn');


btn.addEventListener('click', ()=>{
    body.classList.toggle('bgbody');
    title.classList.toggle('aftername');
    btn.classList.toggle('afterbtn');
}) 