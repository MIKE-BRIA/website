//variables

let btn = document.querySelector('#new-qoute');
let quote = document.querySelector('.qoute');
let author = document.querySelector('.person');


const quotes = [
    {
        quote:"The worst thing that can happen is death or lack of freedom otherwise i will find a way through it or around it",
        author: "Brian Michael"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      author: "Franklin D. Roosevelt"
    },
    {
      quote: "Be the change that you wish to see in the world.",
      author: "Mahatma Gandhi"
    },
    {
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs"
    },
    {
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill"
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      author: "Socrates"
    },
    {
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon"
    },
    {
      quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      author: "Nelson Mandela"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    },
    {
      quote: "Happiness is not something ready made. It comes from your own actions.",
      author: "Dalai Lama XIV"
    }
  ];


  btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;

  })
  
