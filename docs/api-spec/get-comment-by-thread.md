method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/comments/**{commentID}** | returns a certain comment

# url params
`commentID` - comment UUID

# request
```json
n/a
```

# response
```json
{
    "id": "unique comment ID",
    "author": "userID",
    "text": "string",
    "dateCreated": "integer unix epoch in millis",
    "dateUpdated": "integer unix epoch in millis"
}
```