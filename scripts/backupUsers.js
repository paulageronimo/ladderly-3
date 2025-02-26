const fs = require("fs-extra")
const path = require("path")

require("dotenv").config({ path: path.resolve(__dirname, "../.env.local") })

const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function backupUsers() {
  const users = await prisma.user.findMany()
  const jsonUsers = JSON.stringify(users, null, 2)
  await fs.writeFile("./db/bak.users.json", jsonUsers)
  console.log(`Backup of ${users.length} users completed!`)
}

backupUsers()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
