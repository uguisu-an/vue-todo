export interface Task {
  title: string;
  description: string;
}

export function newTask(): Task {
  return {
    title: "",
    description: ""
  };
}
