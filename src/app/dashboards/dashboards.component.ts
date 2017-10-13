import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.css']
  // providers:  [ DashboardService ]
})
export class DashboardsComponent implements OnInit {
  // dashboards: Dashboard[];
  // selectedDashnoard: Dashboard;
  constructor(){}

  ngOnInit() {
    // this.dashboards = this.service.getDashboards();
  }

  // selectDashboard(dashboard: Dashboard){
  //   this.selectDashboard = dashboard;
  // }
}
