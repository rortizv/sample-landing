const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UClRoONdpS4BaTsQVeOOwdog&part=snippet%2Cid&order=date&maxResults=9';

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3c074a9838mshbbf86d9791970b3p196aefjsn68c0c18d7553',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

const content = null || document.getElementById('content');

async function getVideos(apiURL) {
    const response = await fetch(API, options);
    const data = await response.json();
    console.log(data);
    return data;
}

(async () => {
    try {
        const videos = await getVideos(API);
        let view = `
            ${videos.items.map(video => `
                <div class="col-md-3">
                    <div class="card mb-4 box-shadow">
                        <img class="card-img-top" src="${video.snippet.thumbnails.medium.url}" alt="${video.snippet.title}">
                        <div class="card-body">
                        <h5 class="card-title">${video.snippet.title}</h5>
                        <p>${video.snippet.description}</p>
                        </div>
                    </div>
                </div>
            `).join('')}
        `;
        content.innerHTML = view;
    } catch (error) {
        console.error(error);
    }
})();