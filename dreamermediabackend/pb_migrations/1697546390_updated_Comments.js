/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nlfpz2lnxhnwan2")

  // remove
  collection.schema.removeField("a3obhvji")

  // remove
  collection.schema.removeField("98w0vfng")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nux9a19k",
    "name": "Replying",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "nlfpz2lnxhnwan2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "djmgczue",
    "name": "Replies",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "nlfpz2lnxhnwan2",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("nlfpz2lnxhnwan2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "a3obhvji",
    "name": "Replying",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "98w0vfng",
    "name": "Replies",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "_pb_users_auth_",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // remove
  collection.schema.removeField("nux9a19k")

  // remove
  collection.schema.removeField("djmgczue")

  return dao.saveCollection(collection)
})
