let addName = document.querySelector('.name');
let addSurname = document.querySelector('.surname');
let addMail = document.querySelector('.mail');
let addTel = document.querySelector('.tel');
let clkbtn = document.querySelector('.btn');

let users = [];
let a
clkbtn.addEventListener('click', (e) => {
    e.preventDefault()
    let user = {};
    let mistake;
    if (/[A-Z][a-z]+/.test(addName.value) == false || addName.value == /^$/) {
        mistake = false
        addName.style.backgroundColor = '#EBA996FF'
    } else {
        user.name = addName.value
    }

    if (/[A-Z][a-z]+/.test(addSurname.value) == false || addSurname.value == /^$/) {
        mistake = false
        addSurname.style.backgroundColor = '#EBA996FF'
    } else {
        user.surname = addSurname.value
    }

    if (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(addMail.value) == false || addSurname.value == /^$/) {
        mistake = false
        addMail.style.backgroundColor = '#EBA996FF'
    } else {
        user.mail = addMail.value
    }


    if (/^\+374-\d{2}-\d{2}-\d{2}-\d{2}$/.test(addTel.value) == false || addTel.value == /^$/) {
        mistake = false
        addTel.style.backgroundColor = '#EBA996FF'
    } else {
        user.tel = addTel.value
    }



    if (mistake == false) {
        console.log("No");
    } else {
        users.push(user)
        console.log(users);

    }
    a = JSON.stringify(users)
    localStorage.setItem("test1", a)
    addName.value = "";
    addSurname.value = "";
    addMail.value = "";
    addTel.value = ""
})


