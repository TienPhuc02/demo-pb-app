/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhyo2r6i",
    "name": "role",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "s4w2quay41we4re",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yhyo2r6i",
    "name": "roles",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "s4w2quay41we4re",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
