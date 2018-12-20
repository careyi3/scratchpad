
function handleClick() {
  browser.tabs.create({
    "url": "/src/index.html"
  });
}

browser.browserAction.onClicked.addListener(handleClick);