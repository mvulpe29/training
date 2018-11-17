import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Mihai';
  age = 24;
  link = 'https://i.ytimg.com/vi/xjodBEJpA-Q/maxresdefault.jpg';

  numbers = [1, 2, 3];
  links = [
    {
      href: 'https://angular.io/tutorial',
      name: 'Tour of Heroes'
    },
    {
      href: 'https://github.com/angular/angular-cli/wiki',
      name: 'CLI Documentation'
    },
    {
      href: 'https://blog.angular.io/',
      name: 'Angular blog'
    }
  ];

  greet() {
    alert('SALUT!');
  }


  plusAge() {
    if (this.age < 30) {
      this.age++;
    } else {
      this.age--;
    }
  }
}
