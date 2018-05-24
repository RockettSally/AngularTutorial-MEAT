import {Component, OnInit} from "@angular/core"
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'mt-app',
  templateUrl: 'app.component.html',
  viewProviders: [Title]
})
export class AppComponent implements OnInit {

  constructor(title: Title) {
    title.setTitle('Meat');
  }

  ngOnInit() {
    
  }

}
