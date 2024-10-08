import { IsInt, IsNotEmpty, IsDecimal, IsString } from "class-validator";
import { CreateBookRequest } from "../interfaces";

export class CreateBookDto implements Omit<CreateBookRequest, "image"> {

    @IsInt()
    @IsNotEmpty()
    category_id: number

    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    genre: string

    @IsString()
    @IsNotEmpty()
    author: string

    @IsDecimal({ force_decimal: false, decimal_digits: '2', locale: 'en-US' })
    rating: number

    image: any
}

    
