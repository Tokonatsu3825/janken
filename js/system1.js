let img01 = new Image();
let img02 = new Image();
let img03 = new Image();

img01.src ="../image/handA.png"
img02.src ="../image/handB.png"
img03.src ="../image/handC.png"


//描画
/*
元イメージの座標(50, 50)から幅100高さ50の範囲を使用して、座標(10, 10)の位置に、サイズ200×50でイメージを表示
context.drawImage(img01, 50, 50, 100, 50, 10, 10, 200, 50);
*/
function draw() {
    let canvas = document.getElementById("canvas");
    if (canvas.getContext) {
        let ctx = canvas.getContext("2d");
        ctx.drawImage(img01,0,0,1000,1000,50,350,350,350);
        ctx.drawImage(img02,0,0,1000,1000,300,350,350,350);
        ctx.drawImage(img03,0,0,1000,1000,550,350,350,350);

        console.log("描画")
    }
}

//選択時、そのほかを消す
img01.id = "choice1";
img02.id = "choice2";
img03.id = "choice3";

let aImg = document.getElementById("choice1");
let bImg = document.getElementById("choice2");
let cImg = document.getElementById("choice3");

function choiced1(){
    img02.style.display ="none";
    console.log("選択されました")
}

 choiced1();
