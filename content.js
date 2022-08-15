console.log("extension is good!");

window.addEventListener('load',() => {
    setTimeout(function(){
        //do what you need here
        document.getElementsByClassName("VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-k8QpJ VfPpkd-LgbsSe-OWXEXe-Bz112c-M1Soyc VfPpkd-LgbsSe-OWXEXe-dgl2Hf nCP5yc AjY5Oe LQeN7 GjZJab bDxw8b")[0].addEventListener("click",run());
    }, 2000);
});
function run(){
    //var gogle = document.getElementsByClassName('VfPpkd-StrnGf-rymPhb DMZ54e');
    var lis = document.createElement("li");
    lis.classList.add("VfPpkd-StrnGf-rymPhb-ibnC6b");
    lis.id = "Digitize_button";
    var spans = document.createElement("span");
    spans.classList.add("VfPpkd-StrnGf-rymPhb-pZXsl");
    var spans2 = document.createElement("span");
    spans2.classList.add("VfPpkd-StrnGf-rymPhb-f7MjDc");
    var spans3 = document.createElement("span");
    spans3.classList.add("mxmXhf");
    var spans4 = document.createElement("span");
    spans4.classList.add("VfPpkd-StrnGf-rymPhb-b9t22c");
    spans4.innerText = "Digitize";
    var svgelement = '<svg xmlns="http://www.w3.org/2000/svg" focusable="false" width="24" height="24" viewBox="-5.273 -6.58 17.4 23.68" class ="NMm5M hhikbc"><path d="m5.552-6.48m-3.888 22.032 1.296-9.072m-4.536 0h4.536m.648-12.96-5.184 12.96m12.96-12.96-7.776 0m1.296 9.72 7.128-9.72m0 9.72-7.128 0m-3.24 12.312 10.368-12.312m-12.021-8.276-5.184 12.96m4.536 0-4.536 0m3.24 9.072 1.296-9.072m-1.291 9.043 4.004-4.587m.951-17.379-2.984-.066" stroke="#FF0000" stroke-width="1" fill="none""/></svg>'
    lis.appendChild(spans);
    spans3.innerHTML = svgelement;
    spans2.appendChild(spans3);
    lis.appendChild(spans2);
    lis.appendChild(spans4);
    document.getElementsByClassName('VfPpkd-StrnGf-rymPhb DMZ54e')[0].appendChild(lis);

}

chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        //used for debugging
        //console.log("vibe check passed");
        if (request.greeting === "hello")
            sendResponse({farewell: [window.location.href,document.title]});
        if (request.greeting === "loaded")
            console.log("made it");



            sendResponse({farewell: "testing confirmed"});
       return true;
    }
);


document.getElementById("Digitize_button").addEventListener('click',DigiClckd());


