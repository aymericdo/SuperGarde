/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9hv7ybjp8kp7lvv")

  collection.listRule = "@request.auth.id != \"\" && lastName = 'Trougniard'"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("9hv7ybjp8kp7lvv")

  collection.listRule = "@request.auth.id != \"\" && @request.data.lastName = 'Trougniard'"

  return dao.saveCollection(collection)
})
