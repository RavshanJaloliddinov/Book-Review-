export declare  interface UpdateUserRequest {
    id: number,
    name: string,
    email: string,
    username: string,
    role: "user" | "admin" | "superadmin",
    image?: string
}