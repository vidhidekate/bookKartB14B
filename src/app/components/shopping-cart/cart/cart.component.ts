import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartItems= [
    
  ];

  cartTotal = 0
  

  constructor(private msg : MessengerService) { }

  ngOnInit() {
    
  this.msg.getMsg().subscribe(product => {
    console.log(product)
  })

}
}