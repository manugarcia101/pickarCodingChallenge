import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api.service';
import { tap } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-in-direct',
  templateUrl: './change-in-direct.component.html',
  styleUrls: ['./change-in-direct.component.scss']
})
export class ChangeInDirectComponent implements OnInit {

  data:any
  USDEUR:number = 0.889702
  USDCHF:number = 0.951275
  EURUSD:number = 1/this.USDEUR
  CHFUSD:number = 1/this.USDCHF
  day:number = 0

  currencies = ['USD','EUR','CHF'];
  currentCurrencie = 'USD';
  public from = "USD";
  public to = "EUR";
  public rForm: FormGroup;
  public amount:number = 0;
  public result:number = 0;

  constructor(private router: Router, private actRoute: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadFormInstance();
    const auxiliarDate = new Date();

    if(this.day !== auxiliarDate.getDay()){
      this.apiService.getChanges()
      .pipe(
        tap(data => console.log(data)),
        tap(data => this.data = data),
        tap(() => this.change())
      )
      .subscribe()
    }
  }

  change():void{
    if(this.data !== undefined){
      this.USDCHF = this.data.quotes.USDCHF;
      this.USDEUR = this.data.quotes.USDEUR;
      this.EURUSD = 1/this.USDEUR;
      this.CHFUSD = 1/this.USDCHF;
      const day = new Date();
      this.day = day.getDay();
    }
  }

  private loadFormInstance(): void {
    this.rForm = new FormGroup({
      amount: new FormControl(this.amount,[]),
      from: new FormControl(this.from,[Validators.required]),
      to: new FormControl(this.to,[Validators.required])
    });
  }

  convert():void {
    console.log(this.rForm.value.amount)
    console.log(this.rForm.value.from)
    console.log(this.rForm.value.to)
    if(this.rForm.value.from === "USD"){
      
    } else if(this.rForm.value.from === "EUR") {

    } else {

    }
  }

  compare(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }

}
