import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
// export class AppComponent {
//   title = 'part-c';
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
export class AppComponent {
  title = 'Registeration Form';

  displayname='';
  displayaddress='';
  displaycontact='';
  displayemail='';

  getValue(name:string, address:string, contact:string, email:string){
    this.displayname = name;
    this.displayaddress = address;
    this.displaycontact = contact;
    this.displayemail = email;
  }
}
