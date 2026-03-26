import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {TranslateModule, TranslateService, TranslatePipe } from '@ngx-translate/core';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink,TranslateModule,TranslatePipe],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  constructor(private translate :TranslateService){
    
    this.translate.use('en');
  }
  switchLang(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }
isMenuOpen = false;

toggleMenu() {
  this.isMenuOpen = !this.isMenuOpen;
}

closeMenu() {
  this.isMenuOpen = false;
}
}
