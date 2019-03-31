
class NewsController {

    private newsComponent: NewsComponent;

    constructor() {
        this.newsComponent = new NewsComponent();
        this.getNews();
    }

    getNews() {
        fetch(`http://localhost:3050/api/v1/news`)
            .then(res => res.json())
            .then(res => {
                let news: News[] = res.result;
                let divresult = <HTMLDivElement>document.getElementById("news_tab");
                this.newsComponent.render(news, divresult);
            });
    }
}