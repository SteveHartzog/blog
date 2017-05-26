import {autoinject, bindable} from 'aurelia-framework';
import {CommentInterface} from '../../../common/interfaces';

import {DataService} from '../../../services/dataService';

@autoinject
export class CommentsCustomElement {
    @bindable contentId;
    isLoggedIn: boolean = false;
    
    private comments: CommentInterface[] = [];

    constructor(private ds: DataService) {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                console.log(user);
                this.isLoggedIn = true;
            } else {
                this.isLoggedIn = false;
            }
        });
    }

    login(where: 'facebook' | 'google' | 'twitter') {
        switch(where) {
            case 'facebook':
                let facebookProvider = new firebase.auth.FacebookAuthProvider();

                firebase.auth().signInWithPopup(facebookProvider).catch(() => this.isLoggedIn = false);
            break;

            case 'google':
                let googleProvider = new firebase.auth.GoogleAuthProvider();

                firebase.auth().signInWithPopup(googleProvider).catch(() => this.isLoggedIn = false);
            break;

            case 'twitter':
                let twitterProvider = new firebase.auth.TwitterAuthProvider();

                firebase.auth().signInWithPopup(twitterProvider).catch(() => this.isLoggedIn = false);
            break;
        }
    }

    contentIdChanged(newVal) {
        if (newVal) {
            this.ds.getComments(newVal).then(comments => this.comments = comments);
        }
    }
}