import { Component, OnInit } from '@angular/core';
import { NewsService } from './../services/news.service';
import { News } from './../models/news';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  public news: News[];

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.newsService.getAll().subscribe(
      data => {
        this.news = data;
        console.log(this.news);
      },
      err => {
        console.log(err);
      }
    );
  }
}
