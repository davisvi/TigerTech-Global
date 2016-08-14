// This library is to be hosted on github so that
// i can remotly change small aspects of the site.
var news_Table = [
    "<u><sup>07,03,16</sup></u>&nbsp;Our First news Cast!",
    "<u><sup>07,07,16</sup></u>&nbsp;Testing Complete.",
    "<u><sup>07,08,16</sup></u>&nbsp;Revamping Pages",
    "<u><sup>07,12,16</sup></u>&nbsp;News, Announcements and Bannars are now controlled remotely",
    "<u><sup>07,14,16</sup></u>&nbsp;Debugging stage...",
    "<u><sup>07,28,16</sup></u>&nbsp;Debugging complete! with no errors! :D",
    "<u><sup>08,01,16</sup></u>&nbsp;Now linked to remotely hosted library",
    "<u><sup>08,13,16</sup></u>&nbsp;Final Revisions, checking all source code.",
    "<u><sup>08,14,16</sup></u>&nbsp;Version 3! new linking script!",
]
var link_Table = [
        "https://lebanon.instructure.com/login/ldap",
        "http://www.tiger-tech.org/",
        "https://github.com/",
    ]
    // Banner Settings
var BannerOn = false;
var IncludeLink = false;
var Prefix = "[Attention]: "
var Message = "burning the bugs out..."
var MessageLink = "http://google.com/"
MessageLink = "<a href=''" + MessageLink + "'>" + MessageLink + "</a>"
    // End of Banner Settings
function LinkFormatter(t) {
    var out = ""
    for (var i = 0; i < t.length; i++) {
        var Line = "<li><a href='" + t[i] + "'>" + t[i] + "</a></li>"
        if (i != t.length) {
            Line = Line + "<br>"
        }
        out = out + Line
    }
    return out
}
var Links = LinkFormatter(link_Table)
if (IncludeLink == true) {
    WarningOut = Prefix + Message + " [Link Follows] --> " + MessageLink
} else {
    WarningOut = Prefix + Message
}

function getLinks() {
    return Links
}

function getNews() {
    return news_Table
}

function getBanner() {
    if (BannerOn == true) {
        return WarningOut
    } else {
        return null
    }
}
if(window.location.pathname.split("/").pop()=="index.html"){
    var newsTable = getNews();
    newsTable = newsTable.slice(newsTable.length - 4, newsTable.length);
    newsTable.reverse()
    document.getElementById("PageLinks").innerHTML = getLinks()
    document.getElementById("NewsHolder1").innerHTML = newsTable[0]
    document.getElementById("NewsHolder2").innerHTML = newsTable[1]
    document.getElementById("NewsHolder3").innerHTML = newsTable[2]
    document.getElementById("NewsHolder4").innerHTML = newsTable[3]
}
document.getElementById("Banner").innerHTML = getBanner()
