import { TaskStatus } from "../tasks.entity"
import { IsString, IsNotEmpty, MinLength, IsOptional, IsIn } from 'class-validator';

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    title: string

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string
}

export class UpdateTaskDto {
    @IsString()
    @IsOptional()
    @MinLength(5)
    title?: string

    @IsString()
    @IsOptional()
    @MinLength(5)
    description?: string

    @IsString()
    @IsOptional()
    @IsIn([TaskStatus.PENDING, TaskStatus.DONE, TaskStatus.IN_PROGRESS])
    status?: TaskStatus
}