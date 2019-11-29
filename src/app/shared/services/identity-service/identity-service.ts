import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';
import { SCOPES } from '../../configuration/scopes';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class IdentityService implements OnDestroy {
    private subscriptionSuccess: Subscription;
    private subscriptionFailure: Subscription;
    private loggedIn: boolean = false;
    ngOnDestroy(): void {
        this.broadcastService.getMSALSubject().next(1);
        if (this.subscriptionSuccess) {
            this.subscriptionSuccess.unsubscribe();
        }
        if (this.subscriptionFailure) {
            this.subscriptionFailure.unsubscribe();
        }
    }

    constructor(private router: Router, private authService:
        MsalService, private broadcastService: BroadcastService, private http: HttpClient) {
        http.get('https://localhost:5001/api/todos').subscribe(x => console.log(x));
        const user = this.authService.getUser();
        if (user != null) {
            this.loggedIn = true;
            console.log(user);
        } else {
            this.loggedIn = false;
            this.router.navigate(['login']);
        }

        this.subscriptionFailure = this.broadcastService.subscribe('msal:loginFailure', (payload) => {
            console.log('login failure ' + JSON.stringify(payload));
            this.loggedIn = false;
            this.router.navigate(['login']);
        });

        this.subscriptionSuccess = this.broadcastService.subscribe('msal:loginSuccess', (payload) => {
            console.log('login success ' + JSON.stringify(payload));
            this.loggedIn = true;
            this.router.navigate(['/']);
        });
    }

    get name() {
        return this.authService.getUser().name;
    }

    logOut(): void {
        this.authService.logout();
    }


    get isLoggedIn() {
        return this.loggedIn;
    }

    login() {
        this.authService.loginPopup(SCOPES);
    }
}