/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "twvitbzs",
    "name": "backend_id",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  // remove
  collection.schema.removeField("twvitbzs")

  return dao.saveCollection(collection)
})
