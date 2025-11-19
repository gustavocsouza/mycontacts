import CategoryMapper from './mappers/CategoryMapper';
import HttpClient from './utils/HttpClient';

class CategoriesService {
  constructor() {
    this.httpClient = new HttpClient("https://mycontacts-v407.onrender.com");
  }

  async listCategories(signal) {
    const categories = await this.httpClient.get('/categories', { signal });
    return categories.map(CategoryMapper.toDomain);
  }
}

export default new CategoriesService();
