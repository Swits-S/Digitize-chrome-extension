console.log("background is running");

chrome.action.onClicked.addListener(buttonClicked);

function buttonClicked(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
            //used for debugging
            //console.log(response.farewell[0]);
        });
    });
}