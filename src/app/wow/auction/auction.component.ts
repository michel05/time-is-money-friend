import { Auction } from './auction.type';
import { Response } from '@angular/http';
import { WowService } from './../wow.service';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'auction',
    templateUrl: 'auction.component.html'
})

export class AuctionComponent implements OnInit {

    auctions: Auction[] = [];
    arkhanas: Auction[] = [];
    estilhacos: Auction[] = [];
    cristais: Auction[] = [];
    key: string = 'buyout'; //set default
    reverse: boolean = false;

    constructor(private wowService: WowService) { }

    ngOnInit() { }

    sort(key){
      this.key = key;
      this.reverse = !this.reverse;
      console.log("key " + key + " " + this.reverse);
    }

    atualizarValores() {
        this.wowService.buscarAuction()
            .subscribe((response: Response) => {
                this.buscarAuctions(response.json().files[0].url);
            });
    }

    buscarAuctions(json: string) {
        this.wowService.requisitar(json)
            .subscribe((response: Response) => {
                this.auctions  = response.json().auctions;
                this.obterItens();
            });
    }

    obterItens() {
        this.auctions.filter((x) => {
            console.log("aqui");
            if(x.item == 124440) {
                x.unitPrice = x.buyout/x.quantity;
                this.arkhanas.push(x);
                console.log("arkhanas");
            }
            if(x.item == 124441) {
                x.unitPrice = x.buyout/x.quantity;
                this.estilhacos. push(x);
            }
            if(x.item == 124442) {
                x.unitPrice = x.buyout/x.quantity;
                this.cristais. push(x);
            }
        });
    }
}