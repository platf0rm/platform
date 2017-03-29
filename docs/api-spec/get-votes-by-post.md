method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/votes/**{postID}** | gets the number of votes to a post (thread, comment)

# url params
`postID`

# request
```json
n/a
```

# response
```json
{
    "count": "int number of votes"
}
```