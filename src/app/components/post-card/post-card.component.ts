import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {

  constructor(private router: Router) { }

  @Input() id: number = 0;
  @Input() title: string = "";
  @Input() description: string = "";

  redirectToPost () {
    this.router.navigate([`/post/${this.id}`]);
  }

}
