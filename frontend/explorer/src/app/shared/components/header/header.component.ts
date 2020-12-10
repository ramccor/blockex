import { Component, OnInit } from '@angular/core';
import { routesConsts } from '../../../consts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  assetsClicked(): void {
    this.router.navigate([routesConsts.CONFIDENTIAL_ASSETS_LIST]);
  }
}