const quotes = [
  {
    quote: "You always pass failure on the way to success.",
    author: "Mickey Rooney",
  },

  {
    quote: "All you need in this life is ignorance and confidence; then success is sure.",
    author: "Mark Twain",
  },

  {
    quote: "Hope sees the invisible, feels the intangible, and achieves the impossible.",
    author: "Helen Keller",
  },

  {
    quote: "Whenever I hear, 'It can't be done,' I know I'm close to success.",
    author: "Michael Flatley",
  },

  {
    quote: "Humanity can be quite cold to those whose eyes see the world differently.",
    author: "Eric A. Burns",
  },

  {
    quote: "Frugality without creativity is deprivation.",
    author: "Amy Dacyczyn",
  },

  {
    quote: "To follow, without halt, one aim: There's the secret of success.",
    author: "Anna Pavlova",
  },

  {
    quote: "How many a man has dated a new era in his life from the reading of a book.",
    author: "Henry David Thoreau",
  },

  {
    quote: "A room without books is like a body without a soul.",
    author: "Cicero",
  },

  {
    quote: "Some books are undeservedly forgotten; none are undeservedly remembered.",
    author: "W. H. Auden"
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = `" ${todaysQuote.quote} "`;
author.innerText = todaysQuote.author;