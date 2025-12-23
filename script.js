const cardsContainer = document.getElementById("cardscontainer");
const template = document.getElementById("template-news-card");

/* MANUALLY WRITTEN NEWS DATA */
const newsData = [
    {
        title: "Sri Lanka wins thrilling cricket match",
        description: "Sri Lanka secured a dramatic victory in the final over, thrilling fans across the country.",
        image: "https://via.placeholder.com/400x200?text=Cricket",
        source: "Sports Desk",
        date: "22 Dec 2025",
        category: "cricket"
    },
    {
        title: "India launches new satellite",
        description: "ISRO successfully launched a new communication satellite into orbit today.",
        image: "https://via.placeholder.com/400x200?text=India",
        source: "Science News",
        date: "22 Dec 2025",
        category: "india"
    },
    {
        title: "New AI technology changes future",
        description: "Experts say AI will reshape industries faster than ever before.",
        image: "https://via.placeholder.com/400x200?text=Technology",
        source: "Tech World",
        date: "22 Dec 2025",
        category: "technology"
    },
    {
        title: "Parliament passes new bill",
        description: "The government passed a major bill after long discussions in parliament.",
        image: "https://via.placeholder.com/400x200?text=Politics",
        source: "Political Desk",
        date: "22 Dec 2025",
        category: "politics"
    }
];

/* RENDER NEWS */
function renderNews(data) {
    cardsContainer.innerHTML = "";

    data.forEach(news => {
        const clone = template.content.cloneNode(true);

        clone.querySelector("#news-title").innerText = news.title;
        clone.querySelector("#news-desc").innerText = news.description;
        clone.querySelector("#news-img").src = news.image;
        clone.querySelector("#news-source").innerText =
            `${news.source} · ${news.date}`;

        cardsContainer.appendChild(clone);
    });
}

/* NAVIGATION FILTER */
function onNavItemClick(category) {
    const filtered = newsData.filter(item => item.category === category);
    renderNews(filtered);
}

/* SEARCH */
document.getElementById("search-button").addEventListener("click", () => {
    const text = document.getElementById("search-text").value.toLowerCase();

    const filtered = newsData.filter(item =>
        item.title.toLowerCase().includes(text) ||
        item.description.toLowerCase().includes(text)
    );

    renderNews(filtered);
});

/* LOAD DEFAULT NEWS */
renderNews(newsData);
