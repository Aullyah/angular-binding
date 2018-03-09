import { Component } from '@angular/core';
import { Item } from './item/item.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  add(nama, nim, peminatan, nilai, grade):boolean{
  	console.log(`nama anda ${nama.value} , nim anda ${nim.value} dan jurusan anda ${peminatan.value}`);
    grade.value = 'A';
    if(nilai.value > 80 ){
      grade.value = 'A';
    }else if(nilai.value > 60 && nilai.value < 81 ){
      grade.value = 'B';
    }else if(nilai.value > 40 && nilai.value < 61 ){
      grade.value = 'C';
    }else if(nilai.value > 20 && nilai.value < 41 ){
      grade.value = 'D';
    }else{
      grade.value = 'E';
    }

  	this.simpan.push(new Item(nama.value, nim.value, peminatan.value, nilai.value, grade.value));
  	nama.value = "";
  	nim.value = "";
  	peminatan.value = "";
  	nilai.value = "";
  	grade.value = "";
  	return false; // agar tdk berulang
  }

 
  simpan : Item[];

  constructor(){
  	this.simpan = [
  		new Item('nur','e1e115083','ti',90,'A'),
  		new Item('pika','e1e115085','ti',70,'B')
  	]
  }

  
}
