console.log("extensiion is vibing!");
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //used for debugging
        //console.log("vibe check passed");
        if (request.greeting === "hello")
            sendResponse({farewell: [window.location.href,document.title]});
       return true;
    }
);
