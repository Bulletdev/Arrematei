import { PrismaClient } from '@prisma/client'
import { withAccelerate } from '@prisma/extension-accelerate'
new PrismaClient().$extends(withAccelerate());
