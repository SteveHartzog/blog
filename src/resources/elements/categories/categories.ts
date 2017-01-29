import { inject } from 'aurelia-framework';
import { DataService } from '../../../services/dataService';

@inject(DataService)
export class Categories {
  categories: string[];

  constructor (private ds) {
  }
  
  async attached(): Promise<void> {
    this.categories = await this.ds.loadCategories();
  }
}