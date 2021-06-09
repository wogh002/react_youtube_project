//Axios는 response를 자동으로 JSON data로 변환해줌으로써, 
//작성해야 할 단계가 하나 더 줄어들고, 그로 인해 에러가 날 요소 또한 하나 더 감소하게 된다.
//promise 리턴.
//이전 브라우저버전과 호환이된다.
//featch api 같은 경우 오래된 브라우저에서는 지원이 되지 않는다.

class Youtube {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async mostPopular() {
        const reponse = await this.httpClient.get('/videos', {
            params: {
                part: 'snippet',
                chart: 'mostPopular',
                maxResults: 25,
            }
        })
        return reponse.data.items;
    }

    async search(query) {
        const response = await this.httpClient.get('/search', {
            params: {
                part: 'snippet',
                type: 'video',
                maxResults: 25,
                q: query,
            }
        })
        return response.data.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}
export default Youtube;
