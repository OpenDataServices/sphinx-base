document.addEventListener('DOMContentLoaded', function() {
    var div = document.getElementById('json-schema');

    if (div.attributes["data-schema"]) {
        var docson;
        if (div.attributes["data-docson"]) {
            docson = div.attributes["data-docson"].value;
        } else {
            docson = div.attributes["data-path"].value + "index.html";
        }
        div.insertAdjacentHTML('beforeend', "<iframe id='" + div.attributes["data-schema"].value +
            "' style='padding: 0; border: 0; width:100%; background: transparent' src='" +
            docson + "#" +
            div.attributes["data-schema"].value + "'></iframe>");
        function receiveMessage(event) {
            console.log("<", event)
            if (event.data.id && event.data.id == "docson") {
                var frame = document.getElementById(event.data.url);
                if(event.data.action == "resized") {
                    frame.height = event.data.height + 18;
                }
                if(event.data.action == "ready") {
                    console.log(frame.parentNode)
                    frame.contentWindow.postMessage({ id: "docson", font: window.getComputedStyle(frame.parentNode).fontFamily}, "*");
                }
            }

        }
        window.addEventListener("message", receiveMessage, false);
        } else {
            alert("<p style='color:red'>Missing data-schema (url to schema)</p>")
        }
}, false);
