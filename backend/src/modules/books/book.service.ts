import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Book } from "./schemas";
import { CreateBookRequest } from "./interfaces";

@Injectable()
export class BookService {
    constructor(@InjectModel(Book) private bookModel: typeof Book) { }

    async getAllBooks(): Promise<Book[]> {
        return await this.bookModel.findAll()
    }

    async createBook(payload: CreateBookRequest): Promise<void> {
        await this.bookModel.create({
            category_id: payload.category_id,
            title: payload.title,
            genre: payload.genre,
            author: payload.author,
            image: payload.image,
            rating: payload.rating
        })
    }

    
}