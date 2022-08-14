//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/

// do it in python format first:
// for x in dog_names:
//    if x in dog_string:
//        print(x)
// then apply that to JS

const dog_names = ["Max", "HAS","PuRple","dog"]
const dog_string = "Hello Max, my name is Dog, and I have purple eyes!"

function findWords(){
    let find = "";
    for (let x of dog_names) {
        if (dog_string.toLowerCase().includes(x.toLowerCase())){
          find += x;
            return `Matched dog_name: ${find}`
        } else {
            return 'No matches.'
        }
    } console.log(find)
}

console.log(findWords())



//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

function replaceEvens(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0) {
            // splice
            arr.splice(i, 1, 'even index')
        } // ^replaces even words with 'even index'
    }
    return arr
}

console.log(replaceEvens(["Max","Baseball","Reboot","Goku","Trucks","Rodger"]))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]


// Codewar 1: Thinkful - Logic Drills: Traffic light
function updateLight(current) {
    if(current == 'green') {
      return 'yellow'
    } else if(current == 'yellow') {
      return 'red'
    } else {
      return 'green'
    }}
console.log(updateLight('yellow'))

// Codewar 2: Keep up the hoop
function hoopCount (n) {
    return (n < 10) ? 'Keep at it until you get it' : 'Great, now move on to tricks';
  }
console.log(hoopCount(11))

// Codewar 3: function 1 - hello world
function greet() {
    return 'hello world'
  }
console.log(greet())

// Codewar 4: Fake Binary
function fakeBin(x){
    let binary = '';
    for(let i = 0; i < x.length; i++){
      if(x[i] < '5')binary += '0';
      else if(x[i] >= '5')binary += '1';
    }
    return binary;
  }
  console.log(fakeBin('1923847'))