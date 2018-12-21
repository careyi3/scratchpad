
async function handleClick() {
  var tabs = await browser.tabs.query({});

  if(tabs) {
    tabs.forEach(function(tab) {
      if (tab.url.includes("/src/index.html")) {
        browser.tabs.remove(tab.id);
      }
    });
  }
  
  browser.tabs.create({
    "url": "/src/index.html"
  });
}

browser.browserAction.onClicked.addListener(handleClick);