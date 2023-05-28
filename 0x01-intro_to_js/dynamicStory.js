const nameOfStory = "Journey of Love and Discovery: Chronicles from the Land of Surprises";
let fname = prompt("Enter your name: ");
let gender = prompt("Enter your gender: ");
let age = parseInt(prompt("Enter your age: "));
let place = prompt("Enter the name of the place you live: ");
let mothersName = prompt("Enter the your mother's name: ");
let fathersName = prompt("Enter your father's name: ");
let occupation = prompt("Input the name of your occupation: ");
let wifesName = prompt("Enter the name of your wife: ");
let country = prompt("Enter the name of your country: ");
let favoriteFood = prompt("What is your favorite food: ");

function dynamicStory() {



    let preface = `My name is ${fname}. I am ${gender}. I am ${age} years old. The title of my story is ${nameOfStory}.`

    let story = `My name is ${fname}. I am ${gender}. I am ${age} years old. I live in ${place}.
    
     My mother's name is ${mothersName} and my father's name is ${fathersName}. I work as a ${occupation} in ${country}.
      My wife, ${wifesName}, and I enjoy eating ${favoriteFood}. Life is an adventure, and every day brings new surprises.
       Together, we explore the wonders of ${place} and create memories that will last a lifetime. 
       I am grateful for the love and experiences that fill my life. The end.`;

    let fullStory = preface + story;
    let result = alert(fullStory);

    return result;
}

dynamicStory();





  
   
  