chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.supportsEcashPayments) {
    // Set the badge text to display the green dot.
    chrome.action.setBadgeText({ text: "•", tabId: sender.tab.id });
    // Change the extension logo image.
    chrome.action.setIcon({ path: "images/icon48dot.png", tabId: sender.tab.id });
  } else {
    // Clear the badge text.
    chrome.action.setBadgeText({ text: "", tabId: sender.tab.id });
    // Reset the extension logo image to default.
    chrome.action.setIcon({ path: "images/icon48.png", tabId: sender.tab.id });
  }
});
