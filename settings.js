// settings.js
document.addEventListener('DOMContentLoaded', function () {
  const appVersionSelect = document.getElementById('appVersion');
  const saveButton = document.getElementById('saveSettings');

  // Load the saved setting and set the select option.
  chrome.storage.sync.get(['appVersion'], function (result) {
    if (result.appVersion) {
      appVersionSelect.value = result.appVersion;
    }
  });

  // Save the selected setting when the user clicks Save.
  saveButton.addEventListener('click', function () {
    const selectedAppVersion = appVersionSelect.value;
    chrome.storage.sync.set({ appVersion: selectedAppVersion }, function () {
      console.log('App version setting saved:', selectedAppVersion);
    });
  });
});
