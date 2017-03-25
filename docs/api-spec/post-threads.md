method | endpoint | definition | 
-------| -------- | ---------- |
post   | /api/threads/ | creates a new thread

# url params
`userId` - the user's ID

# request
```
{
    “title”: “string title of post”,
    “dateCreated”: “integer unix epoch in millis”,
    “dateUpdated”: “integer unix epoch in millis”,
    “description”: “string description of post”,
    “media”: “int mediaId”
}
```

# response
```
{ “result”: “ok” }
```