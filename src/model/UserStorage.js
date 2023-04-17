"use strict";

class UserStorage{
    static #user = {    /* #표시는 private처럼 은닉화해서 바로 접근할수 없게 만들어 주는것. */
        id: ["qwq008", "qwq6485"],
        pw: ["@qwq854588", "qwq854588"]
    }

    static getUser(){
        return this.#user;
    }
}

module.exports = UserStorage;