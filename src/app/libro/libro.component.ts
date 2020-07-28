import { Component, OnInit } from '@angular/core';
import { Libro } from './libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
libros : Libro[] = [
  {id : 1,titulo : 'aaa',autor : 'dongato' , editorial : 'abc' , fecha : '12/12/2002'}
]
  constructor() { }

  ngOnInit(): void {
  }

}
