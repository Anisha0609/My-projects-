// let player1 = prompt("PLAYER ONE:What's your name please write Here: You'r Blue!")
// // RGB color BLUE CODE:
// let player1color ="rgb(86, 151, 255)";

// let player2 =prompt("PLAYER TWO: What's your name please write Here: You'r Red");
// // RGB color RED CODE:
// let player2color ="rgb(237, 45, 73)";

// let game_on = true;
// let table =$("table tr");

// const reportWin=(rowNum,colNum)=>{
//     console.log("You won starting at this row,col");
//     console.log(rowNum);
//     console.log(colNum);
// }

// const colorChange=(rowIndex,colIndex,color)=>{
//     return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color",color)
// }

// const returnColor=(rowIndex,colIndex,)=>{
//     return table.eq(rowIndex).find("td").eq(colIndex).find("button").css("background-color")
// }

// const checkBottom=(colIndex)=>{
//     let colorReport = returnColor(5,colIndex);
//     for ( let row=5; row>=0;row--){
//         colorReport= returnColor(row,colIndex);
//         if(colorReport==="rgb(128, 128, 128)"){
//             return row
//         }
//     }
// }


// const colorMatch=(one, two ,three ,four)=>{
//     return (one===two && one===three && one===four &&  one!== "rgb(128, 128, 128)" && one!== undefined)
// }


// // Check for Horizontal Line:

// function Horizontalwincheck(){
//     for(let row = 0; row < 6; row++){
//         for(let col = 0 ; col < 4; col++){
//             if(colorMatch(returnColor(row,col), returnColor(row,col+1), returnColor(row,col+2), returnColor(row,col+3))){
//                 console.log("Horiz");
//                 reportWin(row,col);
//                 return true;
//             }else {
//                 continue;
//             }
//         }
//     }
// }

// // Check for Vertical line:

// function Verticalwincheck(){
//     for(let col= 0; col < 7; col++){
//         for(let row = 0 ; col < 3; row++){
//             if(colorMatch(returnColor(row,col), returnColor(row+1,col), returnColor(row+2,col), returnColor(row+3,col))){
//                 console.log("Vertical");
//                 reportWin(row,col);
//                 return true;
//             }else {
//                 continue;
//             }
//         }
//     }
// }

// // Check for Digonal Win :

// function Digonalwincheck(){
//     for(let col= 0; col < 5; col++){
//         for(let row = 0 ; col < 7; row++){
//             if(colorMatch(returnColor(row,col), returnColor(row+1,col+1), returnColor(row+2,col+2),returnColor(row+3,col+3))){
//                 console.log("Digonal");
//                 reportWin(row,col);
//                 return true;
//             }else if(colorMatch(returnColor(row,col), returnColor(row-1,col+1), returnColor(row-2,col+2),returnColor(row-3,col+3))){
//                 console.log("Digonal");
//                 reportWin(row,col);
//                 return true;
//             }else {
//                 continue;
//             }
//         }
//     }
// }


// // Start with Player One :

// let currentplayer = 1;
// let currentname = player1;
// let currentcolor = player1color;

// $("h3").text(player1 +" it is Your turn now, pick a column to drop it!")

// $(".board button").on("click", function(){
//     let col = $(this).closest("td").index();
//     let bottomAvail = checkBottom(col);
//     changeColor(bottomAvail,col,currentcolor);

//     if (Horizontalwincheck() || Verticalwincheck() || Digonalwincheck()){
//         $("h1").text(currentname + "You Won!");
//         $("h3").fadeOut("fast");
//         $("h2").fadeOut("fast");
//     }
//     currentplayer = currentplayer * -1;

//     if(currentplayer === 1){
//         currentname = player1;
//         $("h3").text(currentname + "it is your turn")
//         currentcolor = player1color
//     }else{
//         currentname = player2;
//         $("h3").text(currentname + "it is your turn")
//         currentcolor = player2color;
//     }
// })



let player1 = prompt("Player One: Enter your name, you will be Blue");
let player1Color = 'rgb(86, 151, 255)';

let player2 = prompt("Player Two: Enter your name, you will be Red");
let player2Color = 'rgb(237, 45, 73)';

let game_on = true;
let table = $('table tr');

const reportWin=(rowNum,colNum)=> {
  console.log("You won starting at this row,col");
  console.log(rowNum);
  console.log(colNum);
}
const changeColor=(rowIndex,colIndex,color)=> {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
  }
  
  
  const returnColor=(rowIndex,colIndex)=> {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
  }
  
  const checkBottom=(colIndex)=> {
    var colorReport = returnColor(5,colIndex);
    for(var row = 5; row >= 0; row--){
      colorReport = returnColor(row,colIndex);
      if(colorReport === 'rgb(128, 128, 128)'){
        return row;
      }
    }
  }
  
  const colorMatchCheck=(one,two,three,four)=>{
    return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);
  }

function horizontalWinCheck() {
    for (var row = 0; row < 6; row++) {
      for (var col = 0; col < 4; col++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
          console.log('horiz');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }
  
  function verticalWinCheck() {
    for(var col=0; col<7; col++){
      for(var row = 0; row < 3; row++){
        if(colorMatchCheck(returnColor(row,col), returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col))){
          console.log('vertical');
          reportWin(row,col);
          return true;
        } else {
          continue;
        }
      }
    }
  }

function diagonalWinCheck() {
    for (var col = 0; col < 5; col++) {
      for (var row = 0; row < 7; row++) {
        if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
          console.log('diagonal');
          reportWin(row,col);
          return true;
        } else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
          console.log('diagonal');
          reportWin(row,col);
          return true;
        }else {
          continue;
        }
      }
    }
  }

function gameEnd(winningPlayer) {
    for (var col = 0; col < 7; col++) {
      for (var row = 0; row < 7; row++) {
        $('h3').fadeOut('fast');
        $('h2').fadeOut('fast');
        $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
      }
    }
  }
  
  var currentPlayer =1;
  var currentName = player1;
  var currentColor = player1Color;
  
  $('h3').text(player1+": it is your turn, please pick a column to drop your blue chip.");
  
  $('.board button').on('click',function() {
  
    var col = $(this).closest("td").index();

var bottomAvail = checkBottom(col);

changeColor(bottomAvail,col,currentColor);

if(horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()){
  gameEnd(currentName);
}

currentPlayer = currentPlayer * -1;

if(currentPlayer === 1){
  currentName = player1;
  $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.")
  currentColor = player1Color;
} else {
  currentName = player2;
  $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
  currentColor = player2Color;
}

})