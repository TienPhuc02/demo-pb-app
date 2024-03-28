/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "jp2xxfzz",
    "name": "backend_createdAt",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "le60gq5w",
    "name": "backend_updatedAt",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gtopcqqw",
    "name": "isDeleted",
    "type": "bool",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "abfqsqy8",
    "name": "deletedAt",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  // remove
  collection.schema.removeField("jp2xxfzz")

  // remove
  collection.schema.removeField("le60gq5w")

  // remove
  collection.schema.removeField("gtopcqqw")

  // remove
  collection.schema.removeField("abfqsqy8")

  return dao.saveCollection(collection)
})
