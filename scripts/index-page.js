const backend = new BandSiteApi("e0eea5f0-0f8c-4b54-9fc4-ff50843766d4");

const commentsContainer = document.querySelector('.user-comments');

function displayData(commentObject){
    const cardEl = document.createElement("article");
    cardEl.classList.add("comment");
    
    const commentEl = document.createElement("p");
    commentEl.innerText = commentObject;

    cardEl.appendChild(commentEl);
    commentsContainer.appendChild(cardEl);
}

async function displayAllData(){
	try {
		const objs = await backend.getComments();

		commentsContainer.innerHTML = '';

		for (let i = 0; i < objs.length; i++) {
			const allNames = objs[i].name;
            const allComments = objs[i].comment;

			const allDates = objs[i].timestamp;
			const date = allDates;
			
			displayData(allNames);
			displayData(allComments);
			displayData(new Date(date).toLocaleDateString('en-GB'));
        }
	}
	catch {
		alert("cannot get comments from API");
	}
}

displayAllData();

const formEl = document.querySelector("#comments-form");

formEl.addEventListener("submit", async(event) => {
    event.preventDefault();

    const cardData = {
        name: event.target.fullName.value,
        comment: event.target.comment.value,
    };

	const postComm = await backend.postComments(cardData);

    displayData(postComm);
  });