"use strict";

class UserStorage{      /* static(전역) */
    static #user = {    /* #표시는 private처럼 은닉화해서 바로 접근할수 없게 만들어 주는것. */
        id: ["qwq008", "qwq6485"],
        pw: ["@qwq854588", "qwq854588"]
    }

    static getUser(...fields){
        const user = this.#user;
        const newUser = fields.reduce((newUser,field) =>{
            if(user.hasOwnProperty(field)){
                newUser[field] = user[field];
            }
            return newUser;
        },{});
        return newUser;
    }

    static getUserInfo(a){
        const user = this.#user;
        const idx = user.id.indexOf(a); /* 인덱스 몇번째 회원 체크 */
        console.log(idx);
        if(idx == -1){
            return {};
        }else{
        const usersKey = Object.keys(user); /* [id, pw] */
        const userInfo = usersKey.reduce((newUser,firstkey) => {
            newUser[firstkey] = user[firstkey][idx];
            return newUser;
        },{})
        return userInfo;}
    }
}

module.exports = UserStorage;