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

   // wordsCounter

  // function repeatedWords(text){
  //   const emptyarr= [];
  //   const arr = text.split(" ");
  
  //   for (let word of arr ) {
  //     if (!emptyarr[word]){
  //       emptyarr[word] = 1;
  //     }
  //     else{
  //       emptyarr[word]++;
  //     }
  //   }
  
  //   console.log(emptyarr);
   

  // }


  function topThreeWords(text) {
    //  if (errorCheck(text)) {
    //   return 0;
    // }
    // let text = filterSentence(text);
    let textArray = text.split(" ");
    let topmost = 0;
    let topmostWord = "";
    let secondMost = 0;
    let secondWord = "";
    let thirdMost = 0;
    let thirdWord = "";
    let result = "";
    textArray.forEach(function (element) {
      let numberOfTimes = numberOfOccurrencesInText(element, text);
      if (numberOfTimes > topmost) {
        topmost = numberOfTimes;
        topmostWord = element;
      } else if (numberOfTimes > secondMost) {
        secondMost = numberOfTimes;
        secondWord = element;
      } else if (numberOfTimes > thirdMost) {
        thirdMost = numberOfTimes;
        thirdWord = element;
      }
      result = topmostWord + " " + topmost + "<br>" + secondWord + " " + secondMost + "<br>" + thirdWord + " " + thirdMost;
    });
    return result;
  }

  // offensiveWord

  const offensiveWords= "zoinks, muppeteer, biffaroni, and loopdaloop"

  function offensiveWord(text){
    const openArr= [];
    const  word = text.split(" ");

    word.forEach(function(element){
      if( offensiveWords.includes(element)){

        openArr.push(quit)

      }
      else{ openArr.push(element)}
    

    });
 
    let result = openArr.join(" ");
    return result
    





  }


//UI Logic
$(document).ready(function(){
    $("form#myTestAnalyzer").submit(function(event){
      event.preventDefault();
      const text = $("#text-passage").val();
      const word = $("#word").val();
      const wordCount = wordCounter(text);
      const occurrencesOfWord = numberOfOccurrencesInText(word, text);
      const mostwords = topThreeWords(text)
      const offensive = offensiveWord(text)
      $("#total-count").html(wordCount);
      $("#selected-count").html(occurrencesOfWord);
      $("#bolded-passage").html(boldPassage(word, text));
      $("#most").html(mostwords);
      $("#OffensiveWords").html(offensive)


        // most used words
  // let most = [];
  // let usedWords = text.split(" ");
  // usedWords.forEach(function(element){
  //   most.push(element);
  // })
  // most.forEach(function(element, index){
  //   let str = "<li>"
  //   $("#most").append(str + element + " " + most[index])
  // })
    })
  });

 

 
 