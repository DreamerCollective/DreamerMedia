/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th0yaw83e4u0iie")

  collection.name = "Files"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th0yaw83e4u0iie")

  collection.name = "File"

  return dao.saveCollection(collection)
})
