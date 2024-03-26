/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bvnjulooun9kvbi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dshzdcyb",
    "name": "users_auth_demo",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "l6v5kelvpfbdgdr",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "txrnruob",
    "name": "roles",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "s4w2quay41we4re",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bvnjulooun9kvbi")

  // remove
  collection.schema.removeField("dshzdcyb")

  // remove
  collection.schema.removeField("txrnruob")

  return dao.saveCollection(collection)
})
