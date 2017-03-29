method | endpoint | definition | 
-------| -------- | ---------- |
post   | /api/threads/{threadID}/comments | creates a new comment

# url params
`threadID` - thread UUID

# request
```json
{
    "author": "userID",
    "text": "string",
    "dateCreated": "integer unix epoch in millis",
    "dateUpdated": "integer unix epoch in millis"
}
```

# response
```json
{
   "result": "ok"
}
```