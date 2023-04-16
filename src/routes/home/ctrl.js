"use strict";

const output = {
    home: (req, res) => {
        res.render('index');
    },

    login: (req, res) => {
        res.render('login');
    }
}

const user = {
    id: [
        "qwq008", "qwq6485"
    ],
    pw: ["@qwq854588", "qwq854588"]
}

const process = {
    login: (req, res) => {
        const id = req.body.id,
            pw = req.body.pw;
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
