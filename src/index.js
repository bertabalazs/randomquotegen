import "./styles.css";

const newQuoteButton = document.querySelector("#js-new-quote");

newQuoteButton.addEventListener("click", getQoute);
const endpoint = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";

async function getQoute() {
  spinner.classList.remove("hidden");
  newQuoteButton.disabled = true;
  try {
    const response = await fetch(endpoint);

    if (!response.ok) {
      throw Error(response.statusText);
    }
    const json = await response.json();
    displayQuote(json.message);
  } catch (err) {
    alert("Failed to fetch");
  }
}

function displayQuote(quote) {
  const quoteText = document.querySelector("#js-quote-text");
  quoteText.textContent = quote;
}

const spinner = document.querySelector("#js-spinner");
