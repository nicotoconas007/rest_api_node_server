import { Sequelize } from "sequelize"
import dotenv from "dotenv"

dotenv.config()

const db = new Sequelize(process.env.DATABASE_URL! , {
    dialect: "postgres",
})

export default db