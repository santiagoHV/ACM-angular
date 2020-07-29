import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  guitars = [
    {
      "edit": "LES PAUL",
      "photo": "https://static.gibson.com/gibson-web/shared/browse-les-paul-thumb-50s.png"
    },
    {
      "edit": "SG",
      "photo": "https://static.gibson.com/gibson-web/shared/browse-sg-thumb-61.png"
    },
    {
      "edit": "ES",
      "photo": "https://static.gibson.com/gibson-web/shared/browse-es-thumb.png"
    },
    {
      "edit": "ACOUSTIC",
      "photo": "https://static.gibson.com/gibson-web/shared/browse-acoustic-thumb.png"
    },
    {
      "edit": "DESIGNER",
      "photo": "https://static.gibson.com/gibson-web/shared/browse-designer-explorer-thumb.png"
    },
    {
      "edit": "BASSES",
      "photo": "https://static.gibson.com/gibson-web/shared/browse-basses-thumb.png"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
