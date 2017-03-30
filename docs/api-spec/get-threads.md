method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads | get a list of threads

# url params
none

# request
```json
n/a
```

# response
```json
{
    "total": "int number of threads",
    "threads": [
        {
            "id": "unique thread ID",
            "title": "string title of post",
            "dateCreated": "integer unix epoch in millis",
            "dateUpdated": "integer unix epoch in millis",
            "description": "string description of post",
            "media": "int mediaId"
        },
        {
            "id": "unique thread ID",
            "title": "string title of post",
            "dateCreated": "integer unix epoch in millis",
            "dateUpdated": "integer unix epoch in millis",
            "description": "string description of post",
            "media": "int mediaId"
        },
        ...
    ]
}
```