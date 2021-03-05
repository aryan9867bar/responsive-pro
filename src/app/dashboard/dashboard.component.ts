import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from "@angular/router";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
// import { DashboardService } from "./dashboard.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  show = true;
  here = true;
  modalRef: BsModalRef;
  // finish = true;
  // modalRef: BsModalRef;
  // items: any[];

  constructor(private router: Router, private modalService: BsModalService) { 
    
  }

  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }


  ngOnInit(): void {
  }

  open() {
    this.show = !this.show;
    let menu:any = document.getElementById("app-menu");
    if(this.show) {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  login() {
    this.here = !this.here;
  }

}
