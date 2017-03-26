method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/comment/**{commentID}**/votes | Gets the number of votes to a comment

# url params
`commentID`

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