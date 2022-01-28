const RSFE = require('rss-feed-emitter');
const feed = new RSFE({ skipFirstLoad: true });

feed.add({
    //url: "http://p2000.brandweer-berkel-enschot.nl/rss.asp",
    url: "https://112-nu.nl/hulpdiensten/rss",
    refresh: 2000,
    eventName: "new-p2000"
})

function checkFilters(filters, message) {
    return filters.some(filter=>message.toLowerCase().includes(filter));
}

function isBCall(message) {
    let b = ["b2", "b1"];
    return b.some(call=>message.toLowerCase().includes(call));
}

feed.on('error', console.error);

exports.feed = feed;
exports.checkP2KFilter = checkFilters;
exports.isBCall = isBCall;