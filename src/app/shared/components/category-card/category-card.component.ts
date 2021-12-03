import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent implements OnInit {

  @Input() color: String = ""
  @Input() categoryName: String = ""
  @Input() icon: String = ""

  constructor() { }

  ngOnInit(): void {
  }

}
