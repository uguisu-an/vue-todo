import parseISO from "date-fns/parseISO";

export default class Task {
  public id?: number;
  public title: string;
  public description: string;
  public date?: Date;

  public constructor(params: Task = { title: "", description: "" }) {
    this.id = params.id;
    this.title = params.title;
    this.description = params.description;
    this.date = params.date;
  }

  public static parse(data: any): Task {
    return new Task(
      Object.assign({}, data, {
        date: data.date ? parseISO(data.date) : undefined
      })
    );
  }
}
