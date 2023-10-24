/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "imv0txrjnu3xcf1",
    "created": "2023-10-17 12:28:38.869Z",
    "updated": "2023-10-17 12:28:38.869Z",
    "name": "Videos_duplicate",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qzpk2nfb",
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
        "id": "mp3uboqj",
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
        "id": "dmsat8nt",
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
        "id": "up7hcn3t",
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
        "id": "cw5vbimg",
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
        "id": "dy9v9lny",
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
  const collection = dao.findCollectionByNameOrId("imv0txrjnu3xcf1");

  return dao.deleteCollection(collection);
})
