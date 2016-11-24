// TEST =======================================================================================

create("Current Browser", infuzzy.getInfo().userAgent, infuzzy.getInfo());

create("Samsung Galaxy S6", 
"Mozilla/5.0 (Linux; Android 6.0.1; SM-G920V Build/MMB29K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.98 Mobile Safari/537.36", 
infuzzy.getInfoFromValue("Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)"));

// =======================================================================================

function create(_title, _userAgent, _json){

    var title = document.createElement("h3");                      
    var nodeTitle = document.createTextNode(_title);

    var agent = document.createElement("h5");                      
    var nodeAgent = document.createTextNode(_userAgent);

    var json = document.createElement("p");                      
    var nodeJson = document.createTextNode(JSON.stringify(_json, null, 2));

    var divisor = document.createElement("h6");                      
    var nodeDivisor = document.createTextNode("_____________________________________________________________________________________________________________");   

    json.appendChild(nodeJson);
    title.appendChild(nodeTitle);
    agent.appendChild(nodeAgent);
    divisor.appendChild(nodeDivisor);

    document.getElementById("info").appendChild(title);
    document.getElementById("info").appendChild(agent);                      
    document.getElementById("info").appendChild(json);
    document.getElementById("info").appendChild(divisor);           
}


//var agent = "Mozilla/4.0 (compatible; MSIE 5.5; Windows 98; Win 9x 4.90)"; //Windows ME
//var agent = "Mozilla/5.0 (Windows; U; Win98; en-US; rv:1.4) Gecko Netscape/7.1 (ax)"; //Windows 98
//var agent = "Opera/7.50 (Windows ME; U) [en]"; //Windows ME
//var agent = "Mozilla/3.01Gold (Win95; I)"; //WIndows 95
//var agent = "Opera/7.50 (Windows XP; U)"; // Windows XP
//var agent = "Mozilla/5.0 (Windows; U; Windows NT 5.2; en-US) AppleWebKit/532.9 (KHTML, like Gecko) Chrome/5.0.310.0 Safari/532.9"; //Server 2003
//var agent = "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US) AppleWebKit/534.7 (KHTML, like Gecko) Chrome/7.0.514.0 Safari/534.7"; //XP
//var agent = "Mozilla/5.0 (Windows; U; Windows NT 6.0; en-US) AppleWebKit/534.14 (KHTML, like Gecko) Chrome/9.0.601.0 Safari/534.14"; // Vista
//var agent = "Mozilla/5.0 (Windows NT 6.2) AppleWebKit/536.3 (KHTML, like Gecko) Chrome/19.0.1061.1 Safari/536.3"; // 8
//var agent = "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.3; Trident/7.0; .NET4.0E; .NET4.0C)"; // 8.1
//var agent = "Mozilla/5.0 (Windows; U; WinNT4.0; en-US; rv:1.2b) Gecko/20021001 Phoenix/0.2"; // NT 4.0
//var agent = "Mozilla/4.0 (compatible; MSIE 6.0; Windows CE; IEMobile 7.11)"; // Windows CE
//var agent = "Mozilla/4.0 (compatible; MSIE 7.0; Windows Phone OS 7.0; Trident/3.1; IEMobile/7.0) Asus;Galaxy6"; //Windows Phone 7.0
//var agent = "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)"; //Windows Phone 7.5
//var agent = "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch)"; // Windows Phone 8.0
//var agent = "Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; Microsoft; Lumia 950) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Mobile Safari/537.36 Edge/13.10586"; //Windows Phone 10
//var agent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36"; // Windows 7
//var agent = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.27 (KHTML, like Gecko) Chrome/12.0.712.0 Safari/534.27"; // Windows 7 64x
//var agent = "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.9.0.1) Gecko/2008070208 Firefox/3.0.1"; //Windows XP

//console.log(agent.match(/(NT) \d\.\d\d?|Windows 98; Win 9x 4.90|Windows ME|Windows 98|Win98|Windows 95|Win95|Windows CE|Windows XP|WinNT4.0|Windows Phone OS \d\.\d|Windows Phone \d\d?\.\d/i));