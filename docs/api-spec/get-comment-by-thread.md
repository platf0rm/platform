method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads/**{threadID}**/comment/**{commentID}** | returns a comment in a certain thread

# url params
`threadID`
`commentID`

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