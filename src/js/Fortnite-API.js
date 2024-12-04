import axios from 'axios';

const APIkey = 'c88484bd-0350-4ba1-ac69-87af7578c429';

export class GetMap {
  APIkey = APIkey;
  BASE_URL = 'https://fortnite-api.com/v1/map';
  async getMap() {
    try {
      const response = await axios.get(`${this.BASE_URL}`);
      return response.data.data.images;
    } catch (error) {
      console.log(error.message);
    }
  }
}
export class GetStats {
  APIkey = APIkey;
  BASE_URL = 'https://fortnite-api.com/v2/stats/br/v2';
  async getStats(name) {
    try {
      const response1 = await axios.get(`${this.BASE_URL}`, {
        params: { name: name },
        headers: {
          Authorization: this.APIkey,
        },
      });

      return response1.data;
    } catch (error) {
      console.log(error.message);
    }
  }
}
