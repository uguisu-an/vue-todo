import Axios, { AxiosInstance } from "axios";

export class TaskApi {
  private readonly client: AxiosInstance;

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  public async getTasks() {
    const res = await this.client.get("tasks");
    console.info(res);
    return res.data;
  }
}

export default new TaskApi(Axios.create({ baseURL: "http://localhost:3000/" }));
