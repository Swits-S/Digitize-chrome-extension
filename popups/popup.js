/**
 * It gets the current tab, sends a message to the content script, and then opens a new tab with the response from the
 * content script
 */
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


/**
 * The function testing() is called when the user clicks the extension icon. The function then sends a message to the
 * content script, which is then sent to the background script. The background script then sends a message back to the
 * content script, which is then sent back to the extension
 */
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


/* Adding an event listener to the DOM. When the DOM is loaded, it will add an event listener to the share and save
buttons. When the share button is clicked, it will call the getvalue() function. When the save button is clicked, it
will call the testing() function. */
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("share").addEventListener('click',getvalue);
    document.getElementById("save").addEventListener('click', testing);
});