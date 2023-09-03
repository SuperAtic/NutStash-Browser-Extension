// popup.js
chrome.storage.sync.get(['appVersion'], function (result) {
  const appVersion = result.appVersion || 'production'; // Default to production if setting not found.
  let walletUrl = 'https://wallet.nutstash.app';

  if (appVersion === 'beta') {
    walletUrl = 'https://alpha.nutstash.app';
  }

  walletIframe.src = walletUrl;

  // Check if the current page supports ecash payments (modify this logic accordingly).
  const supportsEcashPayments = document.querySelector('meta[name="ecash-payment"][content="true"]') !== null;

  // Change the browser action icon color based on support for ecash payments.
  if (supportsEcashPayments) {
    chrome.browserAction.setIcon({ path: { "48": "images/green_icon48.png" } });
  } else {
    chrome.browserAction.setIcon({ path: { "48": "images/icon48.png" } });
  }
});
