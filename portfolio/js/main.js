let experience = [
    "html 어쩌구",
    "css 어쩌구",
    "sass 어쩌구",
    "js 어쩌구",
    "jquery 어쩌구",
    "mysql 어쩌구",
    "php 어쩌구",
    "linux 어쩌구",
]
let experience2 = [
    "editplus 어쩌구",
    "vscode 어쩌구",
    "figma 어쩌구",
    "ps 어쩌구"
]


$(function(){
    $(".css-code .code-inner").html(experience[0]);
    $(".introduce-list .depth2").click(function(){
        $(".introduce-list .depth2").not($(this)).removeClass("on");
        $(this).addClass("on");
        let liIdx = $(this).parent("li").index();
        let btnIdx = $(this).index();
        if(liIdx == 0){
            $(".css-code .code-inner").html(experience[btnIdx-1]);
        }else if(liIdx == 1){
            $(".css-code .code-inner").html(experience2[btnIdx-1]);
        }
    });
});