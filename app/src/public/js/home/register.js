"use strict"; // 이곳은 프론트엔드 화면입니다.

const id = document.querySelector("#id"),  //질의 선택자 (register.ejs에 있는 태그들에 대한 정보) <input id = "id" .../>
    email = document.querySelector("#email"),
    psword = document.querySelector("#psword"),
    confirmPsword = document.querySelector("#confirm-psword"),
    registerBtn = document.querySelector("#button"); 

    registerBtn.addEventListener("click", register);

    function register() {
        if(!id.value) return alert("아이디를 입력해주십시오.");
        if ( psword.value !== confirmPsword.value) {return alert("비밀번호가 일치하지 않습니다.");}
         // 비밀번호 확인은 front-end에서 처리하면됨
          
        const req = {
            id: id.value,
            email: email.value,
            psword: psword.value,
        };

        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify(req), // 어떤 경로로 데이터를 전달할지
        })
        .then((res) => res.json())
        .then((res) => {
            if(res.success) {
                location.href = "/login";  
            } else {
                alert(res.msg);
            }
        })  // req 데이터를 JSON 형태로 감싸주어야함, stringify : 단순히 오브젝트를 문자열로
        .catch((err) => {
            console.error(new Error("회원가입 중 에러 발생"));
        });
    }