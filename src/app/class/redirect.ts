import { Router } from "@angular/router";
import { Injectable } from '@angular/core';

@Injectable()

export class RedirecLogin {
    constructor (private router: Router){
        
    }

    IsLogin(){
        const access = localStorage.getItem('access');

        if (!access) {
            this.router.navigate(['/admin/login']);
        }
    }
}