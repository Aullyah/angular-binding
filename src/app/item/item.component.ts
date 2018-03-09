import { Component, OnInit,Input } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Item } from './item.model';



@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

@Input() simpan : Item[];
  constructor() { }

  ngOnInit() {
  }

 

}
