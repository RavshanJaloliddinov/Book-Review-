import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({ tableName: 'users', timestamps: true })
export class User extends Model {
    @Column({ type: DataType.BIGINT, primaryKey: true, autoIncrement: true })
    id: number

    @Column({ allowNull: false, type: DataType.TEXT })
    name: string

    @Column({ allowNull: false, type: DataType.STRING, primaryKey: true })
    email: string

    @Column({ allowNull: false, type: DataType.STRING, unique: true })
    usename: string

    @Column({ allowNull: false, type: DataType.ENUM('user', 'admin', 'superadmin'), defaultValue: 'user' })
    role: string

    @Column({ allowNull: true, type: DataType.STRING })
    image: string
}