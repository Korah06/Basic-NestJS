import { TaskStatus } from "../task.entity"
import { IsNotEmpty, IsString, MinLength, IsOptional, IsIn } from "class-validator"

export class CreateTaskDto {
    //Los @ son validaciones
    @IsString()
    @IsNotEmpty()
    //Minimo de caracteres
    @MinLength(3)
    title: string

    @IsString()
    description: string
}

//Interrogacion para que typescript permita que sean indefinidos
export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    title?: string

    @IsString()
    @IsOptional()
    description?: string

    @IsString()
    @IsOptional()
    @IsIn(
        [TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING]
    )
    status?: TaskStatus
}