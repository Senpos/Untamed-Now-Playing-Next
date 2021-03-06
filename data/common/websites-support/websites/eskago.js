const EskaGoTrackListener = function() {};
EskaGoTrackListener.prototype = new window.UNPCommon.WebsiteTrackListener();

EskaGoTrackListener.prototype.isPlaying = function() {
    return $('#radio-controller > .wrap > a').attr('class') == "playButton pause";
};

EskaGoTrackListener.prototype.scrapPlayData = function() {
    this.artistName = $('.playlist_small > strong').text();
    this.trackName  = $('.playlist_small > span').text();
    return true;
};

EskaGoTrackListener.prototype.scrapAlbumArt = function() {
    return $('.playlist_small > img').attr('src');
};

window.UNPCommon.runTrackListenerInterval(new EskaGoTrackListener());
