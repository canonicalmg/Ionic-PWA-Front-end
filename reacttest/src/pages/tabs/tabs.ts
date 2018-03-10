import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { RoutinePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = RoutinePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
