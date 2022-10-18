const { ObjectId } = require("mongodb")
const { getMongoCollection } = require("./mongodb")

const DB_NAME = "Desafio2"
const COLLECTION_NAME = "Desafiomongo"


async function getAllutilizadores(token) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.find().toArray()
}
async function getUtilizador(token) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.findOne({ _id: new ObjectId(id) })
}
async function insereSignup() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.insertOne(token)
}
async function insereLogin() {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.insertOne(token)
}

async function getSignById(id) {
    const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME)
    return await collection.deleteOne({ _id: new ObjectId(id) })
}

module.exports = {
    getAllutilizadores,
    getUtilizador,
    insereSignup,
    getSignById,
    insereLogin
}