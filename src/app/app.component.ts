import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Subscription, Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { IdentityService } from './shared/services/identity-service/identity-service';

@Component({
  selector: 'adeptik-tracker-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'APTracker-WebClient';
  loggedIn: boolean = false;
  private subscriptionSuccess: Subscription;
  private subscriptionFailure: Subscription;
  isIframe: boolean;
  constructor(private broadcastService: BroadcastService,
    private authService: MsalService, private http: HttpClient,
    private router: Router, public identity: IdentityService) {
    this.isIframe = window !== window.parent && !window.opener;
    /*if (this.authService.getUser()) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
      this.router.navigate(['login']);
    }*/
  }

  login() {
    this.authService.loginPopup(['user.read', 'offline_access', 'api://f2fee166-e82f-4861-a752-83a1c561115d/access_as_user']);
  }

  ngOnInit(): void {
    /*this.subscriptionFailure = this.broadcastService.subscribe('msal:loginFailure', (payload) => {
      console.log('login failure ' + JSON.stringify(payload));
      this.loggedIn = false;
    });

    this.subscriptionSuccess = this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
      console.log('login success ' + JSON.stringify(payload));
      this.loggedIn = true;
      this.router.navigate(['/']);
    });*/
  }

  /*httpGetRequest(url: string) {
    return this.http.get(url)
      .map((response: any) => {
        return response;
      });
  }*/

  ngOnDestroy(): void {
    /*this.broadcastService.getMSALSubject().next(1);
    if (this.subscriptionSuccess) {
      this.subscriptionSuccess.unsubscribe();
    }
    if (this.subscriptionFailure) {
      this.subscriptionFailure.unsubscribe();
    }*/
  }


}
