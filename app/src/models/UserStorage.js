"use strict";

class UserStorage {
    static #users = {   //'#'은 은닉화 / public에서 private으로 외부에서 불러올 수 없음
        id: ["컴공", "졸작", "파이팅"],
        psword: ["12", "123", "1234"],
        name: ["가가", "나나", "다다"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) =>{
            if(users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id) {
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const userskeys = Object.keys(users);  //users의 키값들만 리스트로 만들것 => [id, psword, name]
        const userInfo = userskeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {}); // {}가 초기값

        return userInfo;
    }
}

module.exports = UserStorage;