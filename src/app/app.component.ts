import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { RouterOutlet } from '@angular/router';
import { slider } from './route-animations'
import { DataApiService } from './services/data-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slider
  ]
})

export class AppComponent {
  title = 'angular';
  state: string = '';
  constructor(public translate: TranslateService, private dataApi: DataApiService) {
    translate.addLangs(['es', 'en']);
    translate.setDefaultLang('es');
    translate.use('es');
    const browserLang = 'es';
    translate.use(browserLang.match(/es🇲🇽|en🇺🇸/) ? browserLang : 'es');
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }

  ngOnInit() {
    this.getListBooks();
  }
  getListBooks() {
    this.dataApi.getAllBooks().subscribe(books => console.log(books));
  }

  

}


