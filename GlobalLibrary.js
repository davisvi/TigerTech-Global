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
    "<u><sup>08,13,16</sup></u>&nbsp;Final Revisions, checking all source code."
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
var Message = "to test the timing of the banner."
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
