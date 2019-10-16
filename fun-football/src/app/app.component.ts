import {Component, OnInit} from '@angular/core';
import {GetDataService} from "../../servises/get-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'fun-football';
  teamLogo: object;
  constructor (public httpServise: GetDataService){  }
  ngOnInit(): void {
    this.httpServise.getTeam().subscribe(res=>{
      console.log(res.api.teams[0].logo)
      this.teamLogo = res.api.teams[0].logo;
      // this.teamLogo = res[api];
    })
  }
}
