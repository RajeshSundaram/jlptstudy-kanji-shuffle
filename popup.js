const shuffleButton = document.getElementById("shuffle");

shuffleButton.addEventListener("click", () => {
  console.log("hello");

  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript({ file: "lib/jquery.js" }, function () {
      chrome.tabs.executeScript(tabs[0].id, {
        file: "shuffle.js",
      });
    });
  });
});
