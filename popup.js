// popup.js
const walletIframe = document.getElementById('walletIframe');

// Load the appropriate URL based on the app version setting.
chrome.storage.sync.get(['appVersion'], function (result) {
  const appVersion = result.appVersion || 'production'; // Default to production if setting not found.
  let walletUrl = 'https://wallet.nutstash.app';

  if (appVersion === 'beta') {
    walletUrl = 'https://alpha.nutstash.app';
  }

 if (appVersion === 'v2') {
    walletUrl = 'https://v2.nutstash.app';
  }

  walletIframe.src = walletUrl;
});
