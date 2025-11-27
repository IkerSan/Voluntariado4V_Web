import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/organisms/navbar/navbar";
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../../components/organisms/sidebar/sidebar";

@Component({
  selector: 'app-dashboard',
  imports: [NavbarComponent, RouterOutlet, SidebarComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  
}
