/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("imv0txrjnu3xcf1")

  collection.name = "Audios"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qzpk2nfb",
    "name": "Audio",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "audio/ogg",
        "audio/mpeg",
        "audio/flac",
        "audio/midi",
        "audio/ape",
        "audio/musepack",
        "audio/amr",
        "audio/wav",
        "audio/aiff",
        "audio/basic",
        "audio/aac",
        "audio/x-unknown",
        "audio/mp4",
        "audio/x-m4a",
        "audio/qcelp"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("imv0txrjnu3xcf1")

  collection.name = "Videos_duplicate"

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
