const quotes = [
    {
        text: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        text: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        author: "Winston Churchill"
    },
    {
        text: "Life is what happens when you're busy making other plans.",
        author: "John Lennon"
    },
    {
        text: "You miss 100% of the shots you don't take.",
        author: "Wayne Gretzky"
    },
    {
        text: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },
    {
        text: "In the middle of every difficulty lies opportunity.",
        author: "Albert Einstein"
    },
    {
        text: "The best way to predict the future is to invent it.",
        author: "Alan Kay"
    },
    {
        text: "Happiness is not something ready made. It comes from your own actions.",
        author: "Dalai Lama"
    },
    {
        text: "It does not matter how slowly you go as long as you do not stop.",
        author: "Confucius"
    },
    {
        text: "The journey of a thousand miles begins with one step.",
        author: "Lao Tzu"
    }
];

// Function to get a random quote
function generateQuote() {
    const index = Math.floor(Math.random() * quotes.length);
    const quoteObj = quotes[index];

    // Update the HTML
    document.getElementById("quote").innerText = quoteObj.text;
        document.getElementById("author").innerText = `- ${quoteObj.author}`;
    }

// Call generateQuote on page load
window.onload = generateQuote;