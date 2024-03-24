"use strict";

const id = document.querySelector("#id"),  //질의 선택자 (login.ejs에 있는 태그들에 대한 정보) <input id = "id" .../>
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

    loginBtn.addEventListener("click", login);

    function login() {
        const req = {
            id: id.value,
            psword: psword.value,
        };
    }