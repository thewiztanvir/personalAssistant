var vapiInstance = null;
const assistant = "e9db82bf-6c1a-4f00-b057-8e61ed079ae4"; // Substitute with your assistant ID
const apiKey = "ef8b8264-57c6-45cd-8315-6c3fdb3a58e6"; // Substitute with your Public key from Vapi Dashboard.
const buttonConfig = {}; // Modify this as required

(function (d, t) {
    var g = document.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src =
        "https://cdn.jsdelivr.net/gh/VapiAI/html-script-tag@latest/dist/assets/index.js";
    g.defer = true;
    g.async = true;
    s.parentNode.insertBefore(g, s);

    g.onload = function () {
        vapiInstance = window.vapiSDK.run({
            apiKey: apiKey, // mandatory
            assistant: assistant, // mandatory
            config: buttonConfig, // optional
        });
    };
})(document, "script");