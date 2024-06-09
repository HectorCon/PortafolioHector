import { Component, OnInit } from '@angular/core';
import { CvhectorService } from '../services/services.component';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit {

  constructor(public cv: CvhectorService) { }

  ngOnInit(): void {
  }

}
