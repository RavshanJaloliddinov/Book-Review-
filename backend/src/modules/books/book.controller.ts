import { Body, Controller, Get, Post } from "@nestjs/common";
import { BookService } from "./book.service";
import { Book } from "./schemas";
@Controller("books")
export class BookController {
    #_service: BookService

    constructor(service: BookService){
        this.#_service = service
    }

    @Get()
    async getAllBooks(): Promise<Book[]> {
        return await this.#_service.getAllBooks()
    }

    @Post('/add')
    async createBook(@Body() createBookPayload): Promise<void> {
        return await this.#_service.createBook()
    }
}