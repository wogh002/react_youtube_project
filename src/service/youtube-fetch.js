class YoutubFeatch {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    async mostPopular() {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?key=${this.key}&part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCYNqNYWWu8JXtSK1I62-LbQa6oxA4WDxE`
            , this.requestOptions
        );
        const result = await response.json();
        return result.items;
    }
    async search(query) {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?key=${this.key}&part=snippet&type=video&maxResults=25&q=${query}&key=AIzaSyCYNqNYWWu8JXtSK1I62-LbQa6oxA4WDxE`
            , this.getRequestOptions
        );
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }))
    }
}
export default Youtube;
