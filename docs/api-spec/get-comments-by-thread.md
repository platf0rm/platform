method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads/{threadID}/comments | returns a comments in a certain thread

# url params
`threadID` - thread UUID

# request
```json
n/a
```

# response
```json
[
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

```