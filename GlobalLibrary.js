// This library is to be hosted on github so that
// i can remotly change small aspects of the site.
var news_Table = [
    "Our First news Cast!",
    "Testing Complete.",
    "Revamping Pages",
    "News, Announcements and Bannars are now controlled remotely",
    "Debugging stage...",
    "Debugging complete! with no errors! :D",
    "Now linked to remotely hosted library"
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
var Message = "Suprise Banner test!"
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
