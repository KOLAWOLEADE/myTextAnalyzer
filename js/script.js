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

  // Topwords

  function topThreeWords(text) {
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


  // OffensiveWord

  const zoniks = "zoinks"
  const wrongWord = "muppeteer"
  const offenceWord = "biffaroni"
  const arrogantWord = "loopdaloop"

  function offensiveWord(text){
    const openArr= [];
    const  word = text.split(" ");

    word.forEach(function(element){
      if( zoniks.includes(element)){

        openArr.push(zoniks)

        console.log(zoniks)

      }

      else if (
        wrongWord.includes(element)) {
          openArr.push(wrongWord)

          console.log(wrongWord)
        }

        else if (
          offenceWord.includes(element)){
          openArr.push(offenceWord)

        console.log(offenceWord)

          }

          else if (arrogantWord.includes(element)){
            openArr.push(arrogantWord)

            console.log(arrogantWord)
          }


       else{ openArr.push(element)
      }
    

    });
 
    let result = openArr.join(" ");
    // return result

    console.log(result)
    





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
      $("#OffensiveWords").text(offensive);



    })
  });

 

 
 