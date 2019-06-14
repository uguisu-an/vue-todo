import Axios, { AxiosInstance } from "axios";

function defaultInstance(): AxiosInstance {
  return Axios.create({
    baseURL: "http://localhost:3000/"
  });
}

class ApiRequest {
  client: AxiosInstance;

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  public async get(url: string, params: any = {}) {
    const res = await this.client.get(url, { params });
    if (res.status !== 200) {
      throw res.data;
    }
    return res.data;
  }

  public async post(url: string, data: any, params: any = {}) {
    const res = await this.client.post(url, data, { params });
    if (res.status !== 200) {
      throw res.data;
    }
    return res.data;
  }
}

export default new ApiRequest(defaultInstance());
