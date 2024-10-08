import { Table, Model, Column, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";



export enum BookGenres {
    FICTION = 'fiction',
    NON_FICTION = 'non-fiction',
    FANTASY = 'fantasy',
    SCIENCE_FICTION = 'science-fiction',
    MYSTERY = 'mystery',
    ROMANCE = 'romance',
    THRILLER = 'thriller',
    HISTORICAL_FICTION = 'historical-fiction',
    HORROR = 'horror',
    BIOGRAPHY = 'biography',
    SELF_HELP = 'self-help',
    ADVENTURE = 'adventure',
    DRAMA = 'drama',
    POETRY = 'poetry',
  }
  

@Table({ tableName: 'books', timestamps: true })
export class Book extends Model {


    @Column({ type: DataType.BIGINT, primaryKey: true, autoIncrement: true })
    id: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    author: string

    @Column({
        type: DataType.DECIMAL(2, 1),
        allowNull: false,
        validate: {
            min: 1,
            max: 5,
        }
    })
    rating: number

    @Column({
        type: DataType.ENUM(...Object.values(BookGenres)),
        allowNull: false,
    })
    genre: BookGenres

    @Column({
        type: DataType.STRING, 
        allowNull: false
    })
    image: string

    // @ForeignKey(() => Category)
    @Column({
        type: DataType.BIGINT,
        allowNull: false,
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION'
    })
    categoryId: number

//     @BelongsTo(() => Category)
//     category: Category
} 