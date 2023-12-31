class BandSiteApi {
    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://project-1-api.herokuapp.com/';
    }

    async getComments(){
        const commentsUrl = `${this.baseUrl}comments?api_key=${this.apiKey}`;

        // Get the data
        const commentData = await axios.get(commentsUrl);

        // Sorting of the comments from the data on the basis of timestamp
        const sortedData = commentData.data.sort((a, b) => {
            return b.timestamp - a.timestamp;
        })
        return sortedData; 
    }

    async postComments(obj){
        const commentsUrl = `${this.baseUrl}comments?api_key=${this.apiKey}`;
        const postCommentData = await axios.post
        (
                commentsUrl,obj, 
                'Content-Type: application/json'
        );

        return postCommentData
    }

    async getShows(){
        const showsUrl= `${this.baseUrl}showdates?api_key=${this.apiKey}`;
        const showsData = await axios.get(showsUrl);
        return showsData;
    }
}