import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../profile/profile';
import { RoutinePage } from '../routine/routine';

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
