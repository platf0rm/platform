method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads/**{threadID}**/votes | Gets the number of votes to a thread

# url params
`threadID`

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