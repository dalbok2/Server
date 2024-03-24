// 컨트롤러 분리
"use strict";

const login =  function(req, res){
    res.render("home/login")
};

module.exports = {
    login
};