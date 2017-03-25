method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/comment/**{commentID}**/votes | Gets the number of votes to a comment

# url params
`commentID`

# request
```
n/a
```

# response
```
{
    “count”: “int number of votes”
}
```