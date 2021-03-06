const KuwoTrackListener = function() {};
KuwoTrackListener.prototype = new window.UNPCommon.WebsiteTrackListener();

KuwoTrackListener.prototype.isPlaying = function() {
    return true;
};

KuwoTrackListener.prototype.findSelector = function() {
    this.selector = $('.control_left');
};

KuwoTrackListener.prototype.scrapPlayData = function() {
    const play = this.selector.find('.dec_time span').text();
    [this.artistName, this.trackName] = window.UNPCommon.parseArtistTitle(play);
    return true;
};

KuwoTrackListener.prototype.scrapAlbumArt = function() {
    return this.selector.find('.control_img img').attr('src');
};

KuwoTrackListener.prototype.scrapUrl = function() {
    const data = $('#bdshare').attr('data');
    const musicid = data.substr(data.indexOf('MUSIC_') + 6, 7);
    return 'http://www.kuwo.cn/yinyue/' + musicid;
};

KuwoTrackListener.prototype.scrapDuration = function() {
    return $.trim(this.selector.find('#wp_totalTime').text());
};

window.UNPCommon.runTrackListenerInterval(new KuwoTrackListener());
