/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("hd8ax7m26atfifn");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "hd8ax7m26atfifn",
    "created": "2023-10-17 13:45:51.774Z",
    "updated": "2023-10-17 13:45:51.774Z",
    "name": "Paragraphs",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dbl7sobk",
        "name": "Title",
        "type": "text",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "wxbzpe80",
        "name": "Text",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "fhcs9n0t",
        "name": "Likes",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "v80ipjrk",
        "name": "Dislikes",
        "type": "number",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "noDecimal": true
        }
      },
      {
        "system": false,
        "id": "ppd7udla",
        "name": "Upload_Date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
})
