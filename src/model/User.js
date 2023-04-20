"use strict";
const UserStorage = require('./UserStorage');

class User {
    constructor(body) {
        this.body = body;
    }

    login() {
        const body = this.body;
        const user = UserStorage.getUserInfo(body.id);
        console.log(user);      /* undefined == 값을 할당하지 않은 변수 */
        if (user.id == undefined) {
            return {success: false, msg: "없는 아이디 입니다."};
        } else if (user) {
            if (user.id == body.id && user.pw == body.pw) {
                return {success: true};
            }
            return {success: false, msg: "비밀번호가 틀렸습니다."};
        }
    }
}

module.exports = User;