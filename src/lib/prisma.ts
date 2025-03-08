import { PrismaClient } from "@prisma/client";

// Garantir que tenha uma conexão aberta com o banco de dados
declare global {
    var cachedPrisma: PrismaClient
}

let prisma: PrismaClient 

if(process.env.NODE_ENV === "production") {
    prisma = new PrismaClient()
} else {
    if(!global.cachedPrisma) {  
        global.cachedPrisma = new PrismaClient()
    }
    prisma = global.cachedPrisma
}

// interação com banco de dados
export const db = prisma