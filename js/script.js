/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


// This is the variable that holds all the quotes, sources, citations and years
var quotes = [
	{
	quote: 'Practice isn\'t the thing you do once you\'re good. It\'s the thing you do that makes you good.',
	source: 'Malcolm Gladwell',
	citation: 'Outliers: The Story of Success',
	year: '2008',
	explain: 'I like this quote because it reminds us that practice can be painful. That\'s the whole point.',
	},
	{
	quote: 'Good writing does not succeed or fail on the strength of its ability to persuade. It succeeds or fails on the strength of its ability to engage you, to make you think, to give you a glimpse into someone else\'s head.',
	source: 'Malcolm Gladwell',
	citation: 'What the Dog Saw and Other Adventures'
	},
	{
	quote: 'Our world requires that decisions be sourced and footnoted, and if we say how we feel, we must also be prepared to elaborate on why we feel that way...We need to respect the fact that it is possible to know without knowing why we know and accept that - sometimes - we\'re better off that way.',
	source: 'Malcolm Gladwell',
	citation: 'Blink: The Power of Thinking Without Thinking'
	},
	{
	quote: 'We overlook just how large a role we all play--and by \'we\' I mean society--in determining who makes it and who doesn\'t.',
	source: 'Malcolm Gladwell',
	citation: 'Outliers: The Story of Success',
	year: '2008',
	explain: 'I like this quote because it says something about how different circumstances influence different outcomes.'
	},
	{
	quote: 'There can be as much value in the blink of an eye as in months of rational analysis.',
	source: 'Malcolm Gladwell',
	citation: 'Blink: The Power of Thinking Without Thinking',
	explain: 'I like this quote because we\'ve all experienced this at some point. You wrestle with a problem for ages and find the solution for it when you\'re not even thinking about it.'
	},
	{
	quote: 'Anyone who has ever scanned the bookshelves of a new girlfriend or boyfriend- or peeked inside his or her medicine cabinet- understands this implicitly; you can learn as much - or more - from one glance at a private space as you can from hours of exposure to a public face.',
	source: 'Malcolm Gladwell',
	citation: 'Blink: The Power of Thinking Without Thinking'
	},
	{
	quote: 'As the playwright George Bernard Shaw once put it: “The reasonable man adapts himself to the world: the unreasonable one persists in trying to adapt the world to himself. Therefore all progress depends on the unreasonable man.',
	source: 'Malcolm Gladwell',
	citation: 'David and Goliath: Underdogs, Misfits, and the Art of Battling Giants'
  }
];
// End of quotes


/***
The getRandomQuote function creates a random number in a variable called randomNumber 
and then uses that variable to call the index of an object within the quote array.
***/


function getRandomQuote() {
	randomNumber = Math.floor(Math.random() * quotes.length);
	return quotes[randomNumber];
	}



/***
The getRandomColor function calls a random color using RGB values and returns the color value.
***/

function getRandomColor() {
	var randomColor =  'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
	return randomColor;
}

/***
The printQuote function calls the quote at the index of the random number and
assigns it to the variable selectedQuote. This function then determines the contents
of the object within the array and prints it to the page using html classes.
***/

function printQuote () {
	var selectedQuote = getRandomQuote();
	document.body.style.background = getRandomColor();
	var html = '';
	html += "<p class='quote'>" + selectedQuote.quote + "</p>";
	html += "<p class='source'>" + selectedQuote.source;
	if ( selectedQuote.citation ) 
{
	html += "<span class='citation'>" + selectedQuote.citation + "</span>";
} 	if ( selectedQuote.year ) {
	html += "<span class='year'>" + selectedQuote.year + "</span></p>";
}	if ( selectedQuote.explain ) {
	html += "<p class='explain'>" + selectedQuote.explain + "</p>";
}
document.getElementById("quote-box").innerHTML = html;

}


/***
The below code calls the printQuote function and has been modified to automatically
call the next quote after 3000 milliseconds. The auto-rotation of quotes can be stopped
by removing setInterval(printQuote, 5000) from with the called function.
***/
printQuote(setInterval(printQuote, 5000));


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);