/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing




// This is the variable that holds all the quotes, sources, citations and years
var quotes = [
	{
	quote: 'Practice isn\'t the thing you do once you\'re good. It\'s the thing you do that makes you good.',
	source: 'Malcolm Gladwell',
	citation: 'Outliers: The Story of Success',
	year: '2008'
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
	year: '2008'
	},
	{
	quote: 'There can be as much value in the blink of an eye as in months of rational analysis.',
	source: 'Malcolm Gladwell',
	citation: 'Blink: The Power of Thinking Without Thinking'
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
	var randomNumber = Math.floor( Math.random() * quotes.length );
	return quotes[randomNumber];
}

/***
The printQuote function calls the quote at the index of the random number and
assigns it to the variable selectedQuote. This function then determines the contents
of the object within the array and prints it to the page using html classes.
***/

function printQuote () {
	var selectedQuote = getRandomQuote();
	var html = '';
	html += "<p class='quote'>" + selectedQuote.quote + "</p>";
	html += "<p class='source'>" + selectedQuote.source + "</p>";
	if ( selectedQuote.citation ) 
{
	html += "<span class='citation'>" + selectedQuote.citation + "</span>";
} 	if ( selectedQuote.year ) {
	html += "<span class='year'>" + selectedQuote.year + "</span>";
}

document.getElementById("quote-box").innerHTML = html;

}

/***
The below code calls the printQuote function and has been modified to automatically
call the next quote after 3000 milliseconds. The auto-rotation of quotes can be stopped
by removing setInterval(printQuote, 3000) from with the called function.
***/
printQuote(setInterval(printQuote, 3000));


/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function. So do not make any changes to the line of code below this 
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);