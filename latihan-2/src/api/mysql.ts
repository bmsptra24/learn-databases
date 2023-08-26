import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Admin",
  //     email: "admin@prisma.io",
  //     password: "admin",
  //     username: "admin",
  //   },
  // });
  // console.log(user);

  const user = await prisma.user.findMany();
  console.log(user);
}

export const createUser = () => {
  main()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
};
