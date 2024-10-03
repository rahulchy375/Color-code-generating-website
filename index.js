let btn1 = document.querySelector(`.btn1`);
let btn2 = document.querySelector(`.btn2`);

let codeDiv = document.querySelector(`.codeDiv`);

let click1 = `rgb(43, 178, 111)`;
let click2 = `rgb(182, 78, 231)`;


const clickBtn1 = () =>{
    let hexCode = `0123456789abcdef`;
    let color1 =`#`;

    for (let i = 0; i < 6; i++) {
        color1 = color1 + hexCode[Math.floor(Math.random()*16)];
    }
    return color1;
}
console.log(clickBtn1);



const clickFun1 = () =>{
    click1 = clickBtn1();
    document.body.style.backgroundImage = `linear-gradient(to right top, ${click1}, ${click2})`;
    btn1.innerHTML = click1;
    codeDiv.innerHTML = `background-image: linear-gradient(to right top, ${click1}, ${click2});`;
}



const clickBtn2 = () =>{
    let hexCode = `0123456789abcdef`;
    let color2 =`#`;

    for (let i = 0; i < 6; i++) {
        color2 = color2 + hexCode[Math.floor(Math.random()*16)];
    }
    return color2;
}


const clickFun2 = () =>{
    click2 = clickBtn2();
    document.body.style.backgroundImage = `linear-gradient(to right top, ${click1}, ${click2})`;
    btn2.innerHTML = click2;
    codeDiv.innerHTML = `background-image: linear-gradient(to right top, ${click1}, ${click2});`;
}


btn1.addEventListener(`click`, clickFun1);
btn2.addEventListener(`click`, clickFun2);


codeDiv.addEventListener(`click`, () =>{
    navigator.clipboard.writeText(codeDiv.innerText);
    alert(`The code has been copied.`);
});