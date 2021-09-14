/*ゲームモード
0通常　1あいこ
*/
let gameMode = 0;

//カーソルが乗ったとき
function ride(x){
    //console.log("マウスが" + x + "の上にあります。") 
}

function leave(x){
    //console.log("マウスが" + x + "の上から離れました。")
}

//選択されたときの処理
let choiceHand;
let countBtn = 0;
function choiced(choiceBtn){
    console.log(countBtn);
    if(countBtn == 0){
        console.log(choiceBtn + "選択されました");
        countBtn++;
        let handA = document.getElementById("handA");
        let handB = document.getElementById("handB");
        let handC = document.getElementById("handC");
        if(choiceBtn == 'A'){
            handB.style.display="none";
            handC.style.display="none";
             choiceHand = "A";
        } if(choiceBtn == 'B'){
           handC.style.display="none";
            handA.style.display="none";
            choiceHand = "B";
        } if(choiceBtn == 'C'){
            handA.style.display="none";
            handB.style.display="none";
            choiceHand = "C";
    }

    //ゲームモード切り替え
    if(gameMode == 0){
        game();
    } if(gameMode == 1){
        drawDo();
    }
    }
}
//上記までhtmlの操作で使う関数

//ゲーム開始
function gameStart(){
    console.log("ゲーム開始")
    let textArea = document.getElementById("textArea");
    textArea.innerHTML = "最初はぐー";
    textArea.style.display = "inline";
}

//つなぎ
function  enemyPre(){
    console.log("準備")
    textArea.innerHTML = "じゃんけん";
}

//敵の手の選択
    　//乱数生成 min以上max以下まで minとmaxは非負整数
function getRandom (min,max){
    let random = Math.floor( Math.random() * (max - min + 1) + min);
    return random;
}


let enemyAI = getRandom(0,2)
console.log("乱数は" + enemyAI);

//敵の行動実行
function enemyStart(){
    console.log("敵の手出した");
    textArea.innerHTML = "";

    //画像読み込み
    let enemyHandA = document.createElement("img");
    enemyHandA.src = "https://tokonatsu3825.github.io/janken/image/backHandA.png";
    enemyHandA.id = "imageAnemy";

    let enemyHandB = document.createElement("img");
    enemyHandB.src = "https://tokonatsu3825.github.io/janken/image/backHandB.png";
    enemyHandB.id = "imageAnemy";
    
    let enemyHandC = document.createElement("img");
    enemyHandC.src = "https://tokonatsu3825.github.io/janken/image/backHandC.png";
    enemyHandC.id = "imageAnemy";



    
　　　//乱数に対応
    function enemySelect(){
        let enemyHand
        if (enemyAI == 0){
            console.log("enemy=0");
            enemyHand = enemyHandA;
        } if (enemyAI == 1){
            console.log("enemy=1");
            enemyHand = enemyHandB;
        } if (enemyAI == 2){
            console.log("enemy=2");
            enemyHand = enemyHandC;
        }
        return enemyHand;
    }

    //敵の手表示
    let imageArea = document.getElementById("imageArea");
    imageArea.appendChild(enemySelect());
    imageArea.style.display = "inline";
}

//勝ち負けの判定
function judge(){
    console.log("ジャッジ"+ enemyAI);
    console.log("ジャッジ"+ choiceHand);
    if (enemyAI == 0){
        if (choiceHand == "A"){
            console.log("引き分け");
            return "draw";
        } if (choiceHand == "B"){
            console.log("負け");
            return "lose"
        } if (choiceHand == "C"){
            console.log("勝ち");
            return "win"
        }
    } if (enemyAI == 1){
        if (choiceHand == "A"){
            return "win";
        } if (choiceHand == "B"){
            return "draw"
        } if (choiceHand == "C"){
            return "lose"
        }
    } if (enemyAI == 2){
        if (choiceHand == "A"){
            return "lose";
        } if (choiceHand == "B"){
            return "win"
        } if (choiceHand == "C"){
            return "draw"
        }
    }
}

//ゲーム結果処理
function displayResult(){
    if(judge() == "win"){
        textArea.innerHTML = "勝ち";
        gameMode = 0;
        console.log("結果表示");
    } if(judge() == "draw"){
        textArea.innerHTML = "あいこで";
        gameMode = 1;
        console.log("結果表示");
        window.setTimeout("drawPre();",1500);
    } if(judge() == "lose"){
        textArea.innerHTML = "負け";
        gameMode = 0;
        console.log("結果表示");
    }
}



//ゲーム初期化
function reset(){
    //選択可能
    countBtn = 0;

    //選択肢表示
    handA.style.display = "inline";
    handB.style.display = "inline";
    handC.style.display = "inline";

    //敵の初期化
    enemyAI = getRandom(0,2);
    console.log("乱数は" + enemyAI);

    //敵の表示消去
    imageArea.style.display = "none";
    textArea.style.display = "none";
}

//ゲーム実行//////////////////////////////

function game(){
    gameStart();
    window.setTimeout("enemyPre();",1000);
    window.setTimeout("enemyStart();",2000);
    window.setTimeout("console.log(judge());",2000);
    window.setTimeout("displayResult();",2500);
    window.setTimeout("reset();",4000);

}

//あいこ実行
function drawPre(){
    reset();
    textArea.style.display = "inline";

}

function drawDo(){
    enemyStart();
    console.log(judge());
    window.setTimeout("displayResult();",500);
    window.setTimeout("reset();",2000);
}







