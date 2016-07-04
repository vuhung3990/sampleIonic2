import {GetFollower} from "../../providers/get-follower/get-follower";
import {GetGithubInfo} from "../../providers/get-github-info/get-github-info";
import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Trang2Page} from "../trang-2/trang-2";

@Component({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    myData: any;
    constructor(private navController: NavController) {
    }

    /** chuyen sang 1 trang moi */
    nextPage() {
        console.log("clicked");
        this.navController.push(Trang2Page);
    }
}
