/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "qwmf01xavbbzvh4",
    "created": "2023-10-17 12:40:22.209Z",
    "updated": "2023-10-17 12:40:22.209Z",
    "name": "Videos_duplicate",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kqckzt6g",
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
        "id": "3p4ogwbg",
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
        "id": "tk4cn5no",
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
        "id": "0hxhsct6",
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
        "id": "76l3xszl",
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
        "id": "hlqcs6lp",
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
  const collection = dao.findCollectionByNameOrId("qwmf01xavbbzvh4");

  return dao.deleteCollection(collection);
})
