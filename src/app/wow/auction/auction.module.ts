import { WowService } from './../wow.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AuctionComponent } from './auction.component';

@NgModule({
    imports: [ CommonModule, Ng2OrderModule ],
    exports: [AuctionComponent],
    declarations: [AuctionComponent],
    providers: [WowService],
})
export class AuctioModule { }
