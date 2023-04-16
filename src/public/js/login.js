"use strict";

window.onload = function () {

    const id = document.querySelector('#id');
    const pw = document.querySelector('#pw');
    const btn = document.querySelector('#btn');

    btn.addEventListener('click', login);

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

}