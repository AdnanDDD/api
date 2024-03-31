import { PrismaClient } from '@prisma/client';

async function createUser() {
  const prisma = new PrismaClient();
  
  try {
    const user = await prisma.user.create({ 
      data: {
        name: "Manik",
        email: "stqh@email.com",
        password: "sddddd",
        phone: "0177778",
        studentID: "11157"
      } 
    });
    
    console.log("User created:", user);
  } catch (error) {
    console.error("Error creating user:", error);
  } finally {
    await prisma.$disconnect();
  }
}

createUser();
