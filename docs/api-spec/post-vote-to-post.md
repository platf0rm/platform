method | endpoint | definition | 
-------| -------- | ---------- |
post    | /api/votes/**{postID}**/**{direction}** | cast up/down vote to a post (thread, comment)

# url params
`postID`
`direction`

# request
```json
n/a
```

# response
```json
{
   "result": "ok"
}
```