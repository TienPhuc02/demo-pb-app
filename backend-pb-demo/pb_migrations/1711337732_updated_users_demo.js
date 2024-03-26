/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  collection.name = "users_auth_demo"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("l6v5kelvpfbdgdr")

  collection.name = "users_demo"

  return dao.saveCollection(collection)
})
