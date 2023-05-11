const quotes = [
    {
        quote : "hahaha1",
        author : "haeun1",
    },
    {
        quote : "hahaha2",
        author : "haeun2",
    },
    {
        quote : "hahaha3",
        author : "haeun3",
    },
    {
        quote : "hahaha4",
        author : "haeun4",
    },
    {
        quote : "hahaha5",
        author : "haeun5",
    },
    {
        quote : "hahaha6",
        author : "haeun6",
    },
    {
        quote : "hahaha7",
        author : "haeun7",
    },
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//Math.round() = 반올림
//Math.ceil() = 올림
//Math.floor() = 내림