/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "7fb63vn9zxisenm",
    "created": "2023-10-17 12:27:42.479Z",
    "updated": "2023-10-17 12:27:42.479Z",
    "name": "Videos",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "xp1zldv1",
        "name": "Video",
        "type": "file",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "video/mp4",
            "video/quicktime",
            "video/quicktime",
            "video/mpeg",
            "video/webm",
            "video/3gpp",
            "video/3gpp2",
            "video/x-msvideo",
            "video/x-flv",
            "video/x-matroska",
            "video/x-ms-asf",
            "video/x-m4v",
            "video/ogg"
          ],
          "thumbs": [],
          "protected": false
        }
      },
      {
        "system": false,
        "id": "me71e1kr",
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
        "id": "hsdasv7j",
        "name": "Description",
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
        "id": "9tyme5ei",
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
        "id": "7aeou8ap",
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
        "id": "3w1k5kla",
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
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("7fb63vn9zxisenm");

  return dao.deleteCollection(collection);
})
