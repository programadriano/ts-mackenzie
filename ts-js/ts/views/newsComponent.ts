class NewsComponent {

    create(data: Object[]) {

        return data.map((news: News) =>
            `<div class="col">
                <img src="${news.img}" />
                <p class="hat">${news.title}</p>
            </div>`
        ).join('')
    }

    render(data: Object[], target: any) {
        let template = this.create(data);
        target.innerHTML = template;
    }

}