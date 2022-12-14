import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService,private checkoutService:CartService) { }

  ngOnInit(): void {
  }
  checkout()
  {

    this.checkoutService.deletecart().subscribe(
      data => {

        if(data['msg']=="order placed")
        {

          this.authService.msg="sucessfully order placed!!!!";
          this.authService.avail=true;
          this.router.navigate(['/cart']);
        }
      },
      error => {
        console.log(error);
      }
    )
  }
}
