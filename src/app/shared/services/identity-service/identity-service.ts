import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { MsalService, BroadcastService } from '@azure/msal-angular';
import { Subscription } from 'rxjs';
import { SCOPES } from '../../configuration/scopes';
import { HttpClient } from '@angular/common/http';
import { Roles as Role } from '../../configuration/roles';
import { ROLE_UNAUTHORIZED, ROLE_ADMIN, ROLE_DEVELOPER } from '../../configuration/pages';

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
        http.get('https://localhost:5001/api/identity/me').subscribe(x => console.log(x));
        const user = this.authService.getUser();
        console.log(user);
        if (user != null) {
            this.loggedIn = true;
        } else {
            this.loggedIn = false;
            this.router.navigate(['login']);
        }

        // tslint:disable-next-line:max-line-length
        this.subscriptionFailure = this.broadcastService.subscribe('msal:loginFailure', (payload) => {
            console.log('login failure ' + JSON.stringify(payload));
            this.loggedIn = false;
            this.router.navigate(['login']);
        });

        // tslint:disable-next-line:max-line-length
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

    get role() {
        return ROLE_DEVELOPER;
    }

    login(): void {
        this.authService.loginPopup(SCOPES);
    }
}
