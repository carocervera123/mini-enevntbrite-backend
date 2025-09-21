import { z } from "zod";

const allowedRoles = ['user','organizer','staff','admin'];

export const registerSchema = z.object({
    name: z.string().min(2).max(80),
    email: z.string().email(),
    password: z.string().min(8).max(128),
})

export const loginSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8).max(128)
})