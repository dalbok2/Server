"use strict";

const db = require("../config/db");

//'#'은 은닉화 / public에서 private으로 외부에서 불러올 수 없음
class UserStorage {

    static getUserInfo(id) {
        return new Promise((reslove, reject) => {
            const query = "SELECT * FROM users WHERE id = ?;";
            db.query(query, [id], (err, data) => {
                if (err) reject(`${err}`);
                reslove(data[0]);
            });
        });
        
    }

    static async save(userInfo) {
        return new Promise((reslove, reject) => {
            const query = "INSERT INTO users(id, email, psword) VALUES(?, ?, ?);";
            db.query(query, 
                [userInfo.id, userInfo.email, userInfo.psword], (err) => {// 물음표에 대입될 변수
                if (err) reject(`${err}`);
                reslove({success: true});
            });
        });
    }
}

module.exports = UserStorage;