// content.js
console.log("Content script loaded.");

// Close the extension popup when clicking outside of it.
window.addEventListener("click", (event) => {
  const isPopup = event.target.closest("#openWalletButton");
  if (!isPopup) {
    chrome.extension.getBackgroundPage().chrome.extension.getViews({ type: "popup" })[0].close();
  }
});

// You can add more logic here if needed.

// Check if the current page supports ecash payments by looking for the "ecash-payment" meta tag.
const supportsEcashPayments = document.querySelector('meta[name="ecash-payment"][content="true"]') !== null;

// Send a message to the background script with the result.
chrome.runtime.sendMessage({ supportsEcashPayments }, (response) => {
  console.log("Supports ecash payments: ", response.supportsEcashPayments);
});
