var init = function(){

  var quoteArticle = document.createElement("article");
  quoteArticle.classList.add("quote");

  var blockQuote = document.createElement("blockquote");
  blockQuote.innerText = "New quote, shiny!";

  var cite = document.createElement("cite");
  cite.innerText = " Some dude.";

  blockQuote.appendChild(cite);
  quoteArticle.appendChild(blockQuote);

  var quotes = document.querySelector("div");
  quotes.insertBefore(quoteArticle, quotes.firstChild);

  var QotdRename = document.querySelector("h2");
  QotdRename.innerText = "Featured Quotes";

  var featuredQuotes = document.querySelector("aside");
  var blockQuote = document.createElement("blockquote");
  blockQuote.innerText = "JavaScript, do you speak you?!";

  var cite = document.createElement("cite");
  cite.innerText = " Slightly Angry Callum";

  blockQuote.appendChild(cite);
  featuredQuotes.appendChild(blockQuote);

  var Quote = function(text, author){
    this.text = text;
    this.author = author;
  }

  var quote1 = new Quote("Visual Basic is the way forward, I don't know why we are doing Javascript.", " Jay Chetty")
  var quote2 = new Quote("The only CSS you need to know is background-color: tomato", " Rick")
  var quote3 = new Quote("No Blockers *smug tone*", " Keith")
  var quote4 = new Quote("Scaffold is nothing but a fiery hell.", " Valerie")

  var quotesArray = [quote1, quote2, quote3, quote4];

  for (var i = 0; i < quotesArray.length; i++) {
    var text = document.createElement("blockquote");
    var cite = document.createElement("cite");
    var article = document.createElement("article");

    text.innerText = (quotesArray[i].text);
    cite.innerText = (quotesArray[i].author);

    text.appendChild(cite);
    article.appendChild(text);

    var container = document.querySelector("#container");
    container.appendChild(article);
  }

  var inputText = document.createElement("input");
  inputText.type = "text";
  inputText.placeholder = "Enter a quote";
  inputText.className = "new-quote"
  container.appendChild(inputText);

  var inputAuthor = document.createElement("input");
  inputAuthor.type = "text";
  inputAuthor.placeholder = "Enter the author";
  container.appendChild(inputAuthor);

  var inputButton = document.createElement("button");
  inputButton.innerText = "Submit";
  container.appendChild(inputButton);

  var handleClick = function(){
   console.log('Whoah I got clicked');
   var quote = inputText.value;
   var author = inputAuthor.value;
   console.log('text input', quote, 'author input', author);
   var newQuote = new Quote(quote, author);
   quotesArray.push(newQuote);
   console.log(newQuote);
   console.log(quotesArray);
 }

 inputButton.onclick = handleClick;
 
 var allQuotes = document.querySelectorAll("article");
 for(var i = 0; i < allQuotes.length; i++) {
  if((i+1) % 2 === 0){
    allQuotes[i].style.backgroundColor = "wheat";
    allQuotes[i].style.color = "tomato";
  }else{
    allQuotes[i].style.backgroundColor = "tomato";
    allQuotes[i].style.color = "wheat";
  }
};
};

window.onload = init;