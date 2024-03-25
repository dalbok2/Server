"use strict";

const fs = require("fs").promises;

//'#'은 은닉화 / public에서 private으로 외부에서 불러올 수 없음
class UserStorage {

    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const userskeys = Object.keys(users);  //users의 키값들만 리스트로 만들것 => [id, psword, name]
        const userInfo = userskeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {}); // {}가 초기값
    
            return userInfo;

    }

    static getUsers(...fields) {
        //const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) =>{
            if(users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        //const users = this.#users;
        return fs
        .readFile("./src/databases/users.json") //then은 성공 catch는 실패 / app.js를 기준으로 경로 설정
        .then((data) => { 
                return this.#getUserInfo(data, id); // 은닉화된 메서드, 가독성을 위한 분리
         })

        .catch(console.error);
    }

    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.email.push(userInfo.email);
        users.psword.push(userInfo.psword);
        return { success: true};
    }
}

module.exports = UserStorage;