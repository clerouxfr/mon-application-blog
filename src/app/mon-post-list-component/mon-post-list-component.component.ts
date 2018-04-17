import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mon-post-list-component',
  templateUrl: './mon-post-list-component.component.html',
  styleUrls: ['./mon-post-list-component.component.scss']
})
export class MonPostListComponentComponent implements OnInit {

  lastUpdate = new Date();

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postLoveIts: number;

  constructor() { }

  ngOnInit() {
  }

  onLove() {
    return this.postLoveIts++;
  }

  onDoNotLove() {
    return this.postLoveIts--;
  }

  getColor() {
    if(this.postLoveIts > 0) {
      return 'green';
    }else if(this.postLoveIts < 0) {
      return 'red';
    }
  }

  getBackground() {
    if(this.postLoveIts > 0) {
      return 'MediumSeaGreen ';
    }else if(this.postLoveIts < 0) {
      return 'indianred';
    }
  }

}
