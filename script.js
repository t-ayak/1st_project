function startQuiz(){
    let answer = prompt("解答を入力してください");

    if (answer) {
        answer = answer.trim().toLowerCase();
    }

    if (answer === "familymart") {
        alert("正解！忘れて欲しいまであるけどね。");
        window.location.href = "menu.html";
    
    } else if (answer === "blackthomasism") {
        alert("ポストカード届いてよかった！隠しページに行きマース！");
        window.location.href = "message.html"; 

    } else {
        alert("不正解。ヒントは瀧田のバイト先");
    }
}