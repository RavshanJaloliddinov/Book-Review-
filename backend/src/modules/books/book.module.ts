import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { Book } from "./schemas";
import { BookService } from "./book.service";
import { BookController } from "./book.controller";

@Module({
    imports: [SequelizeModule.forFeature([Book])],
    providers: [BookService],
    controllers: [BookController]
})

export class BookModule { }