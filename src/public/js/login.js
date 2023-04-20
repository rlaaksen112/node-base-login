"use strict";

window.onload = function () {

    const id = document.querySelector('#id');
    const pw = document.querySelector('#pw');
    const btn = document.querySelector('#btn');
    const reg = document.querySelector('#reg');

    btn.addEventListener('click', login);
    reg.addEventListener('click', reg_block);
    function login() {
        const req1 = {
            id: id.value,
            pw: pw.value
        }
        console.log(JSON.stringify(req1));

        fetch("/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req1)
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) {
                    location.href = "/";
                } else {
                    alert(res.msg);
                }
            })
            .catch((err) => {
                console.log(new Error('로그인중 에러 발생'));
            });
    }

    function reg_block() {
        let a = document.querySelector('.register-form');
        let b = document.querySelector('.login-form');
        if (a.style.display == 'none' || a.style.display == '') {
            a.style.display = 'block';
            b.style.display = 'none';
        } else {
            a.style.display = 'none';
            b.style.display = 'block';
        }
    }
}