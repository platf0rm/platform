method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads/{threadID}/comments | returns all comments in a certain thread

# url params
`threadID` - thread UUID

# request
```json
n/a
```

# response
```json
{
    "total": "int number of comments",
    "comments": [
        {
            "id": "unique comment ID",
            "author": "userID",
            "text": "string",
            "dateCreated": "integer unix epoch in millis",
            "dateUpdated": "integer unix epoch in millis"
        },
        {
            "id": "unique comment ID",
            "author": "userID",
            "text": "string",
            "dateCreated": "integer unix epoch in millis",
            "dateUpdated": "integer unix epoch in millis"
        }
        ...
    ]
}
```