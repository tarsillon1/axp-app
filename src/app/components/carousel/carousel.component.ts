import { Component } from '@angular/core';
import {News} from "../news/news.component";

const DEFAULT_NEWS : News = {
  image: "../../../assets/img/composite.png",
  title: "Men of Word and Deed",
  subtitle: "Montclair State's Theta Chi Phi Chapter",
  description: "Alpha Chi Rho is a national men’s collegiate fraternity whose purpose is to enhance the " +
    "lifelong intellectual, moral and social development of our members through the guidance of our Landmarks."
};

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  listNews() {
    var list = [DEFAULT_NEWS, DEFAULT_NEWS, DEFAULT_NEWS, DEFAULT_NEWS];

    return list;
  }
}
