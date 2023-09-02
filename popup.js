// popup.js
document.getElementById('openWalletButton').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = 'https://wallet.nutstash.app';

    // Open the web app in a new window.
    chrome.windows.create({ url });
  });
});
