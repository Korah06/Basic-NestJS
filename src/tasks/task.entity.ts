//Hacer un enum para cuando queremos que uno de los parametros se encuentre en uno de los definidos dentro del enum
export enum TaskStatus{
  PENDING = 'PENDING',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
}

export class Task {
  id: string
  title: string
  description: string
  status: TaskStatus
}