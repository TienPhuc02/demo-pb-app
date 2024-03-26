/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z6d0xtj9",
    "name": "permissions",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "bvnjulooun9kvbi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
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
    "id": "z6d0xtj9",
    "name": "permisions",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "bvnjulooun9kvbi",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
})
