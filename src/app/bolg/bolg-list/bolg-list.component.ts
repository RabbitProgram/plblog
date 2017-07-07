import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bolg-list',
  templateUrl: './bolg-list.component.html',
  styleUrls: ['./bolg-list.component.css']
})
export class BolgListComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }
  nav(url: string) {
    this.router.navigateByUrl(url);
  }
}
