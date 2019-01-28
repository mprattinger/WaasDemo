import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-waas-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class WaasLayoutComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.queryParamMap.get('rmnr');
    console.log("The id: " + id);
  }

}
