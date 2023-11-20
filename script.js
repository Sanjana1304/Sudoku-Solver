//his is for front end, nothing related to checking validity
const row = document.querySelectorAll(".row");

idnum = 0;
for (let j = 0; j < row.length; j++) {
    for (let i = 0; i < 9; i++) {
        const divElem = document.createElement('div');
        divElem.id = "box"+(idnum);
        divElem.classList.add('box');
        row[j].appendChild(divElem);
        idnum+=1;
    }
}

for (let i = 2; i < 81; i=i+3) {
    const element = document.getElementById("box"+(i));
    element.style.borderRight = "2px solid black"; 
}

//getting all the required elements
providesoln = document.getElementById("providesoln");
const boxes = document.querySelectorAll('.box');
const numbers = document.querySelectorAll('.num');
const levels = document.getElementById("levels");
provide = document.getElementById("provide");
submitBtn = document.getElementById("submitBtn");

//function to give input with conditions
let lastClickedBox = null;

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("click",function(){
        //allowing user to put/modify boxes for initially empty boxes and not for the one which already has numbers as a part of the question
        if (boxes[i].style.color!="red") {
            for (let j = 0; j < boxes.length; j++) {
                boxes[j].style.backgroundColor = "white";
                lastClickedBox = this;
            }
            this.style.backgroundColor = "aliceblue";

            for (let k = 0; k < numbers.length; k++) {
                numbers[k].addEventListener("click",function(){
                    if (lastClickedBox !== null) {
                        lastClickedBox.innerHTML = numbers[k].innerHTML; // Add content to the last clicked box
                    }
                    lastClickedBox.style.paddingTop = "3px";
                    // lastClickedBox.style.paddingBottom = "0px";
                    // lastClickedBox.style.paddingTop = "9px";
                });
                
            }
        }
        
        
    });
    
}

//function to check if the sudoku is valid or not
function checkValidity(arr) {
    const row_arr = [];
    const all_rows=[];

    for (let n = 0; n < arr.length; n++) {
        k=1;
        for (let i = 0; i < arr[n].length; i++) {
            count=0;
            for (let j = 0; j < arr[n].length; j++) {
                if (arr[n][j]==k) {
                    count++;
                }
            }
            k=k+1;
            row_arr[i]=count;
        }
        all_rows.push(row_arr.slice());
    }
    

    isarrValid = false;
    row_valid_cnt=0;
    for (let i = 0; i < all_rows.length; i++) {
        for (let j = 0; j < all_rows[0].length; j++) {
            if (all_rows[i][j]==1) {
                row_valid_cnt++;
            }
        }
    }
    if (row_valid_cnt==all_rows.length*all_rows[0].length) {
        isarrValid = true;
    }
    
    return isarrValid;

}
rst = document.getElementById("restartButton");
lose_content = document.getElementById("lose_content");
const messageContainer = document.getElementById("messageContainer");
rslt_img = document.getElementById("rslt_img");

//1st way of sudoku - user can play
levels.addEventListener("change",function(){
    const selectedLvl = levels.value;
    provide.style.display="none";
    if (selectedLvl=="easy") {
        filled_place1 = [3,4,6,7,11,13,14,15,18,25,30,33,37,38,43,45,46,49,50,55,56,57,58,59,61,62,63,70,71,72,73,74,75,76,79,80];
        nums_inplace1 = [9,5,7,6,7,1,3,8,4,9,3,1,3,9,8,8,4,6,9,9,5,6,2,1,7,8,6,1,5,1,7,4,8,9,2,3];
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = "";
            boxes[i].style.color="black";
            
        }
        
        for (let i = 0; i < filled_place1.length; i++) {
            boxes[filled_place1[i]].innerHTML = nums_inplace1[i];
            boxes[filled_place1[i]].style.paddingTop="3px";
            boxes[filled_place1[i]].style.color="red";
        }
        
        
    }
    else if (selectedLvl=="medium") {
        filled_place2 = [0,1,2,3,4,5,12,21,24,26,27,29,30,32,40,41,43,45,46,52,53,54,61,64,65,66,67,70,72,74,77,80];
        nums_inplace2 = [9,1,8,4,3,6,9,1,8,9,7,2,3,4,7,1,4,3,4,7,6,2,9,5,9,7,4,8,4,6,9,1];
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = "";
            boxes[i].style.color="black";
            
        }
        for (let i = 0; i < filled_place2.length; i++) {
            boxes[filled_place2[i]].innerHTML = nums_inplace2[i];
            boxes[filled_place2[i]].style.paddingTop="3px";
            boxes[filled_place2[i]].style.color="red";
        }

    }
    else if(selectedLvl=="difficult"){
        filled_place3=[9,13,17,20,21,26,27,32,33,35,36,39,45,48,53,56,59,61,65,66,71,78,79];
        nums_inplace3=[6,3,4,2,5,8,3,5,8,7,7,1,8,2,6,6,1,4,9,4,5,1,7];
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].innerHTML = "";
            boxes[i].style.color="black";
            
        }
        for (let i = 0; i < filled_place3.length; i++) {
            boxes[filled_place3[i]].innerHTML = nums_inplace3[i];
            boxes[filled_place3[i]].style.paddingTop="3px";
            boxes[filled_place3[i]].style.color="red";
        }
    }
    
    submitBtn.addEventListener("click",function(){
        game_arr = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
        fill_cnt = 0;
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerHTML!="") {
                fill_cnt+=1;
                
            }
        }
        if (fill_cnt==81) {
            //adding all the inputs as a 9x9 array called game_arr
            for (let i = 0; i < boxes.length; i++) {
                game_arr[parseInt(i/9)][i%9] = boxes[i].innerHTML;
            }
            //console.log(game_arr);

            //checking row validity
            isrowValid = checkValidity(game_arr);
            //console.log(isrowValid);

            //shifting rows to columns to check column validity as well
            const clm_game_arr = [];

        
            for (let i = 0; i < game_arr.length; i++) {
                clm_game_arr[i] = [];
                for (let j = 0; j < game_arr[i].length; j++) {
                    clm_game_arr[i][j] = game_arr[j][i];
                }
            }

            //checking column validity
            //console.log(clm_game_arr);
            isclmValid = checkValidity(clm_game_arr);
            //console.log(isclmValid);

            //shifting to boxes
            const box_game_arr = Array(9).fill().map(() => []);

            for (let m = 0; m < 9; m += 3) {
                for (let n = 0; n < 9; n += 3) {
                    let box = [];
                    for (let i = m; i < m + 3; i++) {
                        for (let j = n; j < n + 3; j++) {
                            box.push(game_arr[i][j]);
                        }
                    }
                    box_game_arr.push(box);
                }
            }
            const box_arr_revised=[];
            for (let i = 0; i < 18; i++) {
                if (box_game_arr[i].length>0) {
                    box_arr_revised.push(box_game_arr[i])
                }
            }
           
            //console.log(box_arr_revised);
            isboxValid = checkValidity(box_arr_revised);
            //console.log(isboxValid);

            if (isrowValid && isclmValid && isboxValid) {
                rslt_img.src = "happyface.jpeg";
                messageContainer.style.display="flex";
                lose_content.innerHTML = "Hurray ! You WON the game !";
                rst.innerHTML = " Play Again :) "
            }
            
            else{
                rslt_img.src = "sadface.jpeg";
                messageContainer.style.display="flex";
            }
           

            if (isrowValid == false) {
                lose_content.innerHTML = "Oops! <br> You have duplicate values in ROW(s) !"
            }
            else if (isclmValid == false) {
                lose_content.innerHTML = "Oops! <br> You have duplicate values in COLUMN(s) !"
            }
            else if (isboxValid == false) {
                lose_content.innerHTML = "Oops! <br> You have duplicate values in GRID(s) !"
            }
            rst.addEventListener("click",function(){
                messageContainer.style.display="none";
            });

            
        }
        else{
            alert("Fill all the boxes before submitting");
        }
    });
});

function is_Valid(board,col,row,num) {
    //for row and column validity checking
    for (let i = 0; i < 9; i++) {
        if (board[row][i] == num || board[i][col] == num) {
            return false;
        }
    }
    //for grid validity checking
    startRow = 3*(Math.trunc((row/3)));
    startCol = 3*((Math.trunc(col/3)));
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow+i][startCol+j] == num) {
                return false;
            }
        }
    }
    return true;
}

function solve_sudoku(array) {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (array[row][col]==0) {
                for (let num = 1; num < 10; num++) {
                    if (is_Valid(array,col,row,num)) {
                        array[row][col] = num;
                        if (solve_sudoku(array)) {
                            return true;
                        }
                        array[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;

}
//2nd way of sudoku - providing soluton for user's question
providesoln.addEventListener("click",function(){
    provide.style.display="block";
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].innerHTML = "";
        boxes[i].style.color="black";
        
    }
    const arr = [[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];
    submitBtn.addEventListener("click",function(){
        for (let i = 0; i < boxes.length; i++) {
            if (boxes[i].innerHTML!="") {
                arr[parseInt(i/9)][i%9] = parseInt(boxes[i].innerHTML);
            }
        }
        //console.log(arr);
        
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].style.backgroundColor = "aliceblue";
        }

        if (solve_sudoku(arr)) {
            for (let i = 0; i < boxes.length; i++) {
                //arr[parseInt(i/9)][i%9] = parseInt(boxes[i].innerHTML);
                provide.innerHTML = "Tadaa! Here is your Solution!"
                provide.style.color = "blue";
                boxes[i].innerHTML = arr[parseInt(i/9)][i%9];
            }
        }
        else{
            rslt_img.src = "sadface.jpeg";
            messageContainer.style.display="flex";
            rst.innerHTML = " Insert Numbers properly "
            lose_content.innerHTML = "Solution does not exist!";
            // console.log("Solution does not exist!")
        }
    });
    rst.addEventListener("click",function(){
        messageContainer.style.display="none";
    });
    
});

//to reset
reset = document.getElementById("resetBtn");
reset.addEventListener("click",function(){
    window.location.reload();
});