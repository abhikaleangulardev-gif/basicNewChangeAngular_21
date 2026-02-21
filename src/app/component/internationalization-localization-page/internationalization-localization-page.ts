import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-internationalization-localization-page',
  imports: [],
  templateUrl: './internationalization-localization-page.html',
  styleUrl: './internationalization-localization-page.css',
})
export class InternationalizationLocalizationPage {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.translate.use('en'); // set initial language
  }
}
