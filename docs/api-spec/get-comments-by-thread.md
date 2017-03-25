method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads/{threadID}/comments | returns a comments in a certain thread

# url params
`threadID`

# request
```
n/a
```

# response
```
[
  {
    “id”: “unique comment ID”,
    “author”: “userID”,
    “text”: “string”,
    “dateCreated”: “integer unix epoch in millis”,
    “dateUpdated”: “integer unix epoch in millis”
  },
  {
    “id”: “unique comment ID”,
    “author”: “userID”,
    “text”: “string”,
    “dateCreated”: “integer unix epoch in millis”,
    “dateUpdated”: “integer unix epoch in millis”
  }
  ...
]

```