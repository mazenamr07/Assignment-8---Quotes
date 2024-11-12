var quotes = [
  {
    quote: `I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear.`,
    author: `- Nelson Mandela -`,
  },
  {
    quote: `If you believe it will work, you'll see opportunities. If you believe it won't, you will see obstacles`,
    author: `- Wayne Dyer -`,
  },
  {
    quote: `Believe you can and you're halfway there.`,
    author: `- Theodore Roosevelt -`,
  },
  {
    quote: `Learn the rules like a pro, so you can break them like an artist.`,
    author: `- Pablo Picasso -`,
  },
  {
    quote: `Do one thing every day that scares you.`,
    author: `- Eleanor Roosevelt -`,
  },
  {
    quote: `I didn't get there by wishing for it or hoping for it, but by working for it.`,
    author: `- Estée Lauder -`,
  },
  {
    quote: `If you can dream it, you can do it.`,
    author: `- Walt Disney -`,
  },
  {
    quote: `Even if you are on the right track, you'll get run over if you just sit there.`,
    author: `- Will Rogers -`,
  },
  {
    quote: `Success is not final, failure is not fatal: it is the courage to continue that counts.`,
    author: `- Winston Churchill -`,
  },
];

function getQuoteIndex(temp) {
  var quoteIndex;
  do {
    quoteIndex = Math.floor(Math.random() * quotes.length);
  } while (quoteIndex === temp);

  return quoteIndex;
}

/* ------------------------------- Randomize ------------------------------- */
var lastIndex = -1;
document.getElementById("quote-btn").onclick = () => {
  lastIndex = getQuoteIndex(lastIndex);
  document.getElementById("quote").innerHTML =
    '"' + quotes[lastIndex].quote + '"';
  document.getElementById("quote-author").innerHTML = quotes[lastIndex].author;
};
