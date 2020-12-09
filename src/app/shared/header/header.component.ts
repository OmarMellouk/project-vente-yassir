import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
/* import { AuthenticationService } from 'src/app/modules/authentification/login/auth.service'; */

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 
  isLoggedIn = false;


  constructor(private route: ActivatedRoute,
    private router: Router,
    /* private authenticationService: AuthenticationService */) { }


    handleLogout() {
     
       this.router.navigate(['/login']);
      /* this.authenticationService.logout(); */
    }
  ngOnInit() {
  
    /* this.isLoggedIn = this.authenticationService.isUserLoggedIn(); */
                      
  }

}
