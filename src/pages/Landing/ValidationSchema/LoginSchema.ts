import z from "zod"
export const LoginSchema=z.object({
    username:z.string().min(8),
    password:z.string().min(8),
    rememberMe:z.boolean()
})