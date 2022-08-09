console.log("extensiion is vibing!");
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("vibe check passed");
        if (request.greeting === "hello")
            sendResponse({farewell: window.location.href});
        // let paragraphs = document.getElementsByTagName("p");
        // for (elt of paragraphs){
        //     elt.style['background-color'] = "BLUE";
        // }
       return true;
    }
);
