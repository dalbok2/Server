// 컨트롤러 분리
"use strict";

const output = {
    login: (req, res) => {
        res.render("home/login")
    },
};

const users = {
    id: ["컴공", "졸작", "파이팅"],
    psword: ["12", "123", "1234"],
};

const process = {
    login: (req, res) => {
        const id = req.body.id,
            psword = req.body.psword;

        if(users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if(users.psword[idx] === psword) {
                return res.json({
                    success: true,  // 로그인이 성공하게 되면 success: true 라는 오브젝트를 json으로 만들어서 res, front-end로 응답
                });
            }
        }

        return res.json({
            success:false,
            msg: "로그인에 실패하셨습니다.",
        })
    },
};


module.exports = {
    output,
    process
};