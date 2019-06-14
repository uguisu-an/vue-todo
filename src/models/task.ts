export interface Task {
  id?: number;
  title: string;
  description: string;
}

export function newTask(): Task {
  return {
    title: "",
    description: ""
  };
}
