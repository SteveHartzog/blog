import {ContentInterface} from '../interfaces';

export class Setup {
  private db: any;

  constructor() {
    this.db = firebase.database();
  }

  populatePosts() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          reject();
          return;
        }

        const posts: ContentInterface[] = [
          {
            title: 'Hello, World',
            category: null,
            content: 'Hello, this is a test blog post being displayed from Firebase. You can remove this post by logging into Firebase and deleting this post in the content table.',
            author: '123455666',
            type: 'post',
            status: 'published'
          }
        ];

        posts.forEach(post => {
          let newPostKey = this.db.ref().child('content').push().key;
          let updates = {};

          updates['/content/' + newPostKey] = post;

          this.db.ref().update(updates);
        });
      });
    });
  } 
}
