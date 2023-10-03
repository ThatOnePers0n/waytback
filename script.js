function combine() {
    var videoUrl = document.getElementById('video_id').value;
    var videoId = getVideoIdFromUrl(videoUrl);

    if (videoId) {
        var link = 'https://web.archive.org/web/2oe_/http://wayback-fakeurl.archive.org/yt/' + videoId;
        window.open(link, '_blank');
    } else {
        alert('Invalid YouTube video URL!');
    }
}

function getVideoIdFromUrl(url) {
    var videoId = '';
    var youtubeRegex = /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([-_a-zA-Z0-9]+)$/;
    var match = url.match(youtubeRegex);

    if (match && match.length > 1) {
        videoId = match[1];
    }

    return videoId;
}
