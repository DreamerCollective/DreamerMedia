/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u21zlek516ox5lc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qwkadqui",
    "name": "Paragraphs",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "hd8ax7m26atfifn",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("u21zlek516ox5lc")

  // remove
  collection.schema.removeField("qwkadqui")

  return dao.saveCollection(collection)
})
