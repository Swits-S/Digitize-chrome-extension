function getvalue(){
    chrome.tabs.getCurrent(btnClikd);
    function btnClikd(tab){
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
                console.log(response.farewell);
                var openurl = 'https://classroom.google.com/share?url=' + response.farewell;
                console.log(openurl);
                window.open(openurl, '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');

            });
        });
    }
}


function testing(){
    console.log("testing");
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("share").addEventListener('click',getvalue);
});