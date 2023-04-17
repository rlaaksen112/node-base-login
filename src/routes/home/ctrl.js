"use strict";

const UserStorage = require('../../model/UserStorage');

const output = {
    home: (req, res) => {
        res.render('index');
    },

    login: (req, res) => {
        res.render('login');
    }
}



const process = {
    login: (req, res) => {
        const id = req.body.id,
        pw = req.body.pw;
        const user = UserStorage.getUser();
        if (user.id.includes(id)) {
            const idx = user
                .id
                .indexOf(id);
            if (user.pw[idx] === pw) {
                return res.json({success: true, msg: "로그인 성공"});
            }
        }
        return res.json({success: false, msg: "로그인 실패"});
    }
}

module.exports = {
    output,
    process
};
