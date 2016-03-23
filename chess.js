//document.onclick = function () {
//	alert("you clicked somewhere on the document");
//}

var chessRotate = document.getElementById("chessImage");

var chessArray = ["chessImages/chess2.png", "chessImages/chess3.png", 					
					"chessImages/chess4.png","chessImages/chess1.png"];
					
var chessIndex = 0;
 
function changeImage () {
	chessRotate.setAttribute("src", chessArray[chessIndex]);
	chessIndex++;
	if (chessIndex >= chessArray.length) {
		chessIndex = 0;
	}
}

setInterval(changeImage, 2000);

//rookPiece

var rookRotate = document.getElementById("rookImage");

var rookArray = ["rookImages/rook2.png", "rookImages/rook3.png", 					
					"rookImages/rook1.png"];
					
var rookIndex = 0;
 
function changeRook () {
	rookRotate.setAttribute("src", rookArray[rookIndex]);
	rookIndex++;
	if (rookIndex >= rookArray.length) {
		rookIndex = 0;
	}
}

setInterval(changeRook, 2000);

//knightPiece

var knightRotate = document.getElementById("knightImage");

var knightArray = ["knightImages/knight2.png", "knightImages/knight3.png", 					
					"knightImages/knight1.png"];
					
var knightIndex = 0;
 
function changeKnight () {
	knightRotate.setAttribute("src", knightArray[knightIndex]);
	knightIndex++;
	if (knightIndex >= knightArray.length) {
		knightIndex = 0;
	}
}

setInterval(changeKnight, 2000);

//bishopPiece

var bishopRotate = document.getElementById("bishopImage");

var bishopArray = ["bishopImages/bishop2.png", "bishopImages/bishop3.png",
					"bishopImages/bishop1.png"];
					
var bishopIndex = 0;

function changeBishop () {
	bishopRotate.setAttribute("src", bishopArray[bishopIndex]);
	bishopIndex++;
	if (bishopIndex >= bishopArray.length) {
		bishopIndex = 0;
	}
}

setInterval(changeBishop, 2000);

//queenPiece

var queenRotate = document.getElementById("queenImage");

var queenArray = ["queenImages/queen2.png", "queenImages/queen3.png",
					"queenImages/queen1.png"];
					
var queenIndex = 0;

function changeQueen () {
	queenRotate.setAttribute("src", queenArray[queenIndex]);
	queenIndex++;
	if (queenIndex >= queenArray.length) {
		queenIndex = 0;
	}
}

setInterval(changeQueen, 2000);

//kingPiece

var kingRotate = document.getElementById("kingImage");

var kingArray = ["kingImages/king2.png", 
				"kingImages/king1.png"];
					
var kingIndex = 0;

function changeKing () {
	kingRotate.setAttribute("src", kingArray[kingIndex]);
	kingIndex++;
	if (kingIndex >= kingArray.length) {
		kingIndex = 0;
	}
}

setInterval(changeKing, 2000);


