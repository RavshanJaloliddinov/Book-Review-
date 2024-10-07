import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { User } from "./schemas";
import { UserService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";

@Controller("/users")
export class UserController {
  #_service: UserService;

  constructor(service: UserService) {
    this.#_service = service;
  }
  
  @Get('/test')
  async testRoute(): Promise<string> {
    return "Test yo‘nalishi ishlayapti!";
  }

  @Get('')
  async getUsers(): Promise<User[]> {
    return this.#_service.getAllUsers()
  }

  @Post('/add')
  async createUser(@Body() createUserPayload: CreateUserDto): Promise<void> {
    await this.#_service.createUser(createUserPayload)
  }

  @Delete('/:userId')
  async deleteUser(@Param("userId", ParseIntPipe) userId: number): Promise<void> {
    await this.#_service.deleteUser(userId)
  }
}