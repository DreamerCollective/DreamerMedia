/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th0yaw83e4u0iie")

  collection.name = "File"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ho8f02ow",
    "name": "File",
    "type": "file",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "application/x-7z-compressed",
        "application/zip",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "application/vnd.openxmlformats-officedocument.presentationml.presentation",
        "application/epub+zip",
        "application/jar",
        "application/vnd.oasis.opendocument.text",
        "application/vnd.oasis.opendocument.text-template",
        "application/vnd.oasis.opendocument.spreadsheet",
        "application/vnd.oasis.opendocument.spreadsheet-template",
        "application/vnd.oasis.opendocument.presentation",
        "application/vnd.oasis.opendocument.presentation-template",
        "application/vnd.oasis.opendocument.graphics",
        "application/vnd.oasis.opendocument.graphics-template",
        "application/vnd.oasis.opendocument.formula",
        "application/vnd.oasis.opendocument.chart",
        "application/vnd.sun.xml.calc",
        "application/pdf",
        "application/vnd.fdf",
        "application/x-ole-storage",
        "application/x-ms-installer",
        "application/octet-stream",
        "application/vnd.ms-outlook",
        "application/vnd.ms-excel",
        "application/vnd.ms-publisher",
        "application/vnd.ms-powerpoint",
        "application/msword",
        "application/postscript",
        "application/pkcs7-signature",
        "application/ogg",
        "application/vnd.microsoft.portable-executable",
        "application/x-elf",
        "application/x-object",
        "application/x-executable",
        "application/x-sharedlib",
        "application/x-coredump",
        "application/x-archive",
        "application/vnd.debian.binary-package",
        "application/x-tar",
        "application/x-xar",
        "application/x-bzip2",
        "application/fits",
        "application/vnd.apple.mpegurl",
        "application/vnd.rn-realmedia-vbr",
        "application/gzip",
        "application/x-java-applet",
        "application/x-shockwave-flash",
        "application/x-chrome-extension",
        "application/vnd.ms-fontobject",
        "application/wasm",
        "application/vnd.shx",
        "application/vnd.shp",
        "application/x-dbf",
        "application/dicom",
        "application/x-rar-compressed",
        "application/x-mobipocket-ebook",
        "application/x-ms-reader",
        "application/vnd.sqlite3",
        "application/vnd.nintendo.snes.rom",
        "application/x-ms-shortcut",
        "application/x-mach-binary",
        "application/marc",
        "application/x-msaccess",
        "application/x-msaccess",
        "application/zstd",
        "application/vnd.ms-cab-compressed",
        "application/x-rpm",
        "application/x-xz",
        "application/lzip",
        "application/x-bittorrent",
        "application/x-cpio",
        "application/tzif",
        "application/x-installshield",
        "application/rss+xml",
        "applicatiotom+xml",
        "application/vnd.google-earth.kml+xml",
        "application/x-xliff+xml",
        "application/gml+xml",
        "application/gpx+xml",
        "application/vnd.garmin.tcx+xml",
        "application/x-amf",
        "application/vnd.ms-package.3dmanufacturing-3dmodel+xml",
        "application/vnd.adobe.xfdf",
        "application/owl+xml",
        "application/javascript",
        "application/json",
        "application/geo+json",
        "application/json",
        "application/x-ndjson",
        "application/x-subrip",
        "application/warc",
        "application/octet-stream"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th0yaw83e4u0iie")

  collection.name = "Videos_duplicate"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ho8f02ow",
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
