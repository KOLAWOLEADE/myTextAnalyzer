function noInputtedWord(word,text){
    ((word.trim().length === 0) || (text.trim().length === 0))
    return 0;
    }
  
    // word counter
  function wordCounter(text) {
      if (text.trim().length === 0) {
  
      }

      let wordCount = 0;
      const wordArray = text.split(" ");
      wordArray.forEach(function(element) {
        if (!Number(element)) {
          wordCount++;
        }
      });
      return wordCount;
    }


     // number of occurences
  function numberOfOccurrencesInText(word, text) {
    if (word.trim().length === 0) {
      return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }


  //   function to bold text
function boldPassage(word, text) {
    if(noInputtedWord(word,text)){
      return ""
    }
      let htmlString = "<p>";
      let textArray = text.split(" ");
      textArray.forEach(function(element, index) {
        if (element.toLowerCase().includes(word.toLowerCase()))  {
          htmlString = htmlString.concat( ("<b>" + word + "</b>"));
        } else {
          htmlString = htmlString.concat(element);
        }
        if (index !== (textArray.length - 1)) {
          htmlString = htmlString.concat(" ");
        }
      });
      return htmlString + "</p>";
    }


    //UI Logic
$(document).ready(function(){
    $("form#word-counter").submit(function(event){
      event.preventDefault();
      const text = $("#text-passage").val();
      const word = $("#word").val();
      const wordCount = wordCounter(text);
      const occurrencesOfWord = numberOfOccurrencesInText(word, text);
      $("#total-count").html(wordCount);
      $("#selected-count").html(occurrencesOfWord);
      $("#bolded-passage").html(boldPassage(word, text));

















// BUSINESS LOGIC

// function wordCounter(sentence){
//     if (sentence.trim().lenght ===0){

//         return 0;
//     }
// let counters = 0
// const counterArray = sentence.split(" ");
// counterArray.forEach(function(element){
//     if (!Number(element)){
//         counters++;
//     }

// }) 
//    return counters;

// }

// console.log(element)

// const sentence = "to to  go bum hi lo bum bum Bum"
// const newArr = []
// const sentenceArr = sentence.split()

// for ( let word of sentenceArr) {
//     if (!newArr[word]) {
//         newArr[word] = 1;
//     }

//     else {
//         newArr[word]++
    
//     }
// }








// function NumberOfOccurrencesInSentence(sentence){
//     if (sentence.trim().length === 0 );{

//         return 0;
//     }

//     const counterArray = sentence.split(" ");
//     let counters = 0;
//     counterArray.forEach(function(element){
//     if (element > 0) {

//         counters++;

//     }
    
// });

// return counters;

// }




// UI LOGIC 


// $(document).ready(function(){
//     $("form#myTestAnalyzer").submit(function(event){
//       event.preventDefault();

//       const counter = $("#counter").val();

//       $("#highestCount").html(counters)




    //   const passage = $("#text-passage").val();
    //   const word = $("#word").val();
    //   const wordCount = wordCounter(passage);
    //   const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    //   $("#total-count").html(wordCount);
    //   $("#selected-count").html(occurrencesOfWord);
    //   $("#bolded-passage").html(boldPassage(word, passage));
//     });
//   });





