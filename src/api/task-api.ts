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
    const res = task.id
      ? await this.client.put(`tasks/${task.id}`, task)
      : await this.client.post("tasks", task);
    return res.data as Task;
  }
}

export default new TaskApi(Axios.create({ baseURL: "http://localhost:3000/" }));
