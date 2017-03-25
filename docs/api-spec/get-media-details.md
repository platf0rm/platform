method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/media/**{mediaId}** | gets media details

# url params
`mediaId`

# request
```
n/a
```

# response
```
{
    “type”: “media type, VIDEO or IMAGE or LINK”,
    “dateCreated”: “integer unix epoch in millis”,
    “url”: “Url of media”
}
```