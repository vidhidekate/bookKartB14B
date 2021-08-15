import { Component, OnInit} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { error } from 'console';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { SubscriptionService } from 'src/app/services/subscription.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent  implements OnInit{

  userId:any ;
  bookId:any ;
  totalCartitem: number = 0

  constructor(private snackBarService: SnackbarService ,
  private cartService:addtocartService) { }
  ngOnInit(): void {
    
  }

  popup (message:any, action:any){
    this.snackBarService.openSnackBar(message, action);
  }
  handleAddToCart() {
    this.cartService.addProducts(this.userId, this.bookId).subscribe(
      (      result: any) => {
        this.snackBarService.openSnackBar('One item added to cart', 'Dismiss');
      },
      
    )
  }
  }
