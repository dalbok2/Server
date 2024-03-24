"use strict"; // 이곳은 프론트엔드 화면입니다.

const id = document.querySelector("#id"),  //질의 선택자 (login.ejs에 있는 태그들에 대한 정보) <input id = "id" .../>
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

    loginBtn.addEventListener("click", login);

    function login() {
        const req = {
            id: id.value,
            psword: psword.value,
        };

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(req), // 어떤 경로로 데이터를 전달할지
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/";  
            } else {
                alert(res.msg);
            }
        })  // req 데이터를 JSON 형태로 감싸주어야함, stringify : 단순히 오브젝트를 문자열로
        .catch((err) => {
            console.error(new Error("로그인 중 에러 발생"));
        });
    }