import { IsNotEmpty, IsString, IsOptional, IsEmail, isEmail } from "class-validator"
import { ApiProperty } from '@nestjs/swagger';
import { CreateUserRequest } from "../interfaces";

enum UserRoles {
    user = 'user',
    admin = 'admin',
    superadmin = 'superadmin',
  }

export class UpdateUserDto implements Omit<CreateUserRequest, "id"> {
    @ApiProperty({
        type: String,
        example: "G'ishmat",
        description: "Ism kiritilishi shart"
    })
    @IsNotEmpty()
    @IsString()
    name: string;

    @ApiProperty({
        type: String,
        example: "gishmat_1",
        required: true,
        description: "username kiritilish shart"
    })
    @IsString()
    @IsNotEmpty()
    username: string

    @ApiProperty({
        type: String,
        required: true,
        example: "gishmat@gmail.com",
        description: "email kiritilishi shart"
    })
    @IsOptional()
    @IsEmail()
    @IsNotEmpty()
    email: string

    @ApiProperty({
        type: String,
        format: 'binary',
        required: true,
        description: 'User rasmi berilishi shart',
    })
    @IsString()
    image: string

    
    @ApiProperty({
        enum: UserRoles,
        name: "Role",
        required: false,
      })
    @IsString()
    @IsNotEmpty()
    role: "user" | "admin" | "superadmin"
}
