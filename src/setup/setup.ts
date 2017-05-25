import {ContentInterface, CategoryInterface} from '../common/interfaces';

export class Setup {
  private db: any;

  constructor() {
    this.db = firebase.database();
  }

  populateCategories() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        if (!user) {
          reject();
          return;
        }

        const categories: CategoryInterface[] = [
          {
            name: 'Uncategorized',
            description: null,
            parentCategory: null,
            isDefault: true
          },
          {
            name: 'Aurelia',
            description: 'Blog posts about the Aurelia Javascript framework',
            parentCategory: null,
            isDefault: false
          }
        ];

        categories.forEach(category => {
          let newCategoryKey = this.db.ref().child('categories').push().key;
          let updates = {};

          updates['/categories/' + newCategoryKey] = category;

          this.db.ref().update(updates);
        });
      });
    });
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
            title: 'Application Architecture 2015',
            category: '-KkpZ2f3uCQGFaycHNDs',
            content: 'Here are my thoughts on web application architecture. ```css\nIt was a presentation``` ~~~~\nI did for a company in DC for an interview.\n~~~~  \n \n  Google Slides: [Application Architecture](http://slides.com/stevehartzog/apparchitecture#/)',
            excerpt: 'JavaScript Application Architecture in 2015.',
            author: 'Steve',
            type: 'post',
            status: 'published',
            url: 'app-architecture-2015',
            created_at: '2015-01-18 17:15'
          },
          {
            title: 'JavaScript Modules',
            category: '-KkpZ2f3uCQGFaycHNDs',
            content: 'I put together a quick presentation on the different JavaScript module types. CommonJS, ES2015, AMD. AMD and RequireJS are long overdue for being expunged, deleted and forgotten about.  \n  \nGoogle Slides: [JavaScript Modules](https://docs.google.com/presentation/d/1qOOLIQWjvzvhjhcRLSNYVSheqK5HOSgH4IJWLI4YS0s/edit?usp=sharing)',
            excerpt: 'Another post that describes the current holiday when I was writing it.',
            author: 'Steve',
            type: 'post',
            status: 'published',
            url: 'javascript-modules',
            created_at: '2015-05-01 17:20'
          },
          {
            title: 'JavaScript Build presentation.',
            category: '-KkpZ2f3uCQGFaycHNDs',
            content: 'I put together a quick presentation on the different JavaScript build options.  \n  \nGoogle Slides: (JavaScript Build)[https://docs.google.com/presentation/d/1jCYVxAwmvR9jGM76salvbrEwQV9CdfRlKHKiM5cpXfQ/edit?usp=sharing]  \n  \n  ##tldr; Yep, I like SystemJS. Transpilation. Build pipeline. Kitchen sink. :)',
            excerpt: 'JavaScript Build presentation.',
            author: 'Steve',
            type: 'post',
            status: 'published',
            url: 'javascript-build',
            created_at: '2015-05-22 10:50'
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
