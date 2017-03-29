method | endpoint | definition | 
-------| -------- | ---------- |
post    | /api/votes/**{postID}**/**{direction}** | cast up/down vote to a post (thread, comment)

# url params
`postID` - thread or comment UUID
`direction` - direction of the vote (up or down?)

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