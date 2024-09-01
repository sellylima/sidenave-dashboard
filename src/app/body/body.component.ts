import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  @Input() collapsed = false;
  @Input() screenWidth = 0;
  
  ngOnInit(): void {
  }

  getBodyClass(): string {
   if (this.collapsed && this.screenWidth > 768) {
      return 'body-trimmed';
    } else if (this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      return 'body-md-screen';
    }
    return 'body-content'; // Estado padrão
  }
}
