function getvalue(){
    chrome.tabs.getCurrent(btnClikd);
    function btnClikd(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
                //used for debugging
                // console.log(response.farewell);
                var openurl = 'https://classroom.google.com/share?url=' + response.farewell[0]+ '&title=' + response.farewell[1];
                window.open(openurl, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

            });
        });
    }
}

//debugging function
function testing(){
    console.log("testing");
    chrome.tabs.getCurrent(clkd);
    function clkd(){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "testing"}, function(response) {
                //used for debugging
                console.log(response.farewell);
            });
        });
    }

}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("share").addEventListener('click',getvalue);
    document.getElementById("save").addEventListener('click', testing);
});