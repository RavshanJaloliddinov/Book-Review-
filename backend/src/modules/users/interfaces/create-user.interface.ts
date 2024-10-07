export declare interface CreateUserRequest {
    name: string,
    email: string,
    username: string,
    role: "user" | "admin" | "superadmin",
    image?: string
}