import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// import fetch from 'node-fetch';
// import { default as fetch, Headers } from 'node-fetch';
// import fetch from 'cross-fetch';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactComponent } from './contact/contact.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  test = ''
  title = 'project-blackbox';
  testing() {
    // router.navigate('')
    this.test = 'AMERICA!'
  }

  async fetchApiResponse () {
    // const response = await fetch('https://github.com/');
    // const body = await response.text();
    // console.log(body);

    fetch('https://api.scraperapi.com/?api_key=4998b78d81e3698f558b6c92366463a3&url=https%3A%2F%2Fwww.bestbuy.com%2Fsite%2Finsignia-65-class-f30-series-led-4k-uhd-smart-fire-tv%2F6492966.p%3FskuId%3D6492966')
    .then(res => {
        if (res.status >= 400) {
          throw new Error("Bad response from server");
        }
        return res.json();
      })
      .then(user => {
        console.log(user);
      })
      .catch(err => {
        console.error(err);
      });
  //   fetch('//api.github.com/users/lquixada')
  // .then(res => {
  //   if (res.status >= 400) {
  //     throw new Error("Bad response from server");
  //   }
  //   return res.json();
  // })
  // .then(user => {
  //   console.log(user);
  // })
  // .catch(err => {
  //   console.error(err);
  // });
  }
}
