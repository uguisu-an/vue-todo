import Axios, { AxiosInstance } from "axios";
import { Task } from "@/models/task";

export class TaskApi {
  private readonly client: AxiosInstance;

  public constructor(client: AxiosInstance) {
    this.client = client;
  }

  public async getTasks() {
    const res = await this.client.get("tasks");
    return res.data;
  }

  public async save(task: Task) {
    if (task.id) {
      await this.client.put(`tasks/${task.id}`, task);
    } else {
      await this.client.post("tasks", task);
    }
  }
}

export default new TaskApi(Axios.create({ baseURL: "http://localhost:3000/" }));
