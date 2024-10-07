import { Module } from "@nestjs/common";
import { UserService } from "./users.service";
import { UserController } from "./users.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./schemas";

@Module({
  imports: [SequelizeModule.forFeature([User])],
  providers: [UserService],
  controllers: [UserController]
})

export class UserModule {}