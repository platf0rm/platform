method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads/**{threadID}**/votes | Gets the number of votes to a thread

# url params
`threadID`

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