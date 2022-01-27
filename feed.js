const RSFE = require('rss-feed-emitter');
const feed = new RSFE({ skipFirstLoad: true });

feed.add({
    url: "http://p2000.brandweer-berkel-enschot.nl/rss.asp",
    refresh: 2000,
    eventName: "new-p2000"
})

function checkFilters(filters, message) {
    let match = false;
    let words = message.split(' ');
    words.forEach((word) => {
        if(filters.includes(word.toLowerCase())) match = true;
    });
    return match;
}

exports.feed = feed;
exports.checkP2KFilter = checkFilters;