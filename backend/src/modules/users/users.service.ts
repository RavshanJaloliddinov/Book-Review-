import { InjectModel } from "@nestjs/sequelize";
import { User } from "./schemas";
import { CreateUserRequest, UpdateUserRequest } from "./interfaces";

export class UserService {
  constructor(@InjectModel(User) private userModel: typeof User) { }


  async getAllUsers(): Promise<User[]> {
    return await this.userModel.findAll();
  }

  async createUser(payload: CreateUserRequest): Promise<void> {
    await this.userModel.create({
      name: payload.name,
      username: payload.username,
      email: payload.email,
      image: payload?.image,
      role: payload.role
    })
  }

  async deleteUser(id: number): Promise<void> {
    await this.userModel.destroy({ where: { id } })
  }

  async updateUser(payload: UpdateUserRequest): Promise<void> {
    await this.userModel.update({
      name: payload.name,
      email: payload.email,
      username: payload.username,
      image: payload?.image,
      role: payload.role,
    }, {
      where: { id: payload.id }
    })
  }
}