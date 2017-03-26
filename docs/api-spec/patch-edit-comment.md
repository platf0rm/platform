method | endpoint | definition |
-------| -------- | ---------- |
patch  | /api/threads/**{threadID}**/comments/**{commentID}** | Patches an existing comment in an existing thread for changes

# url params
- `threadID`
- `commentID`

# request

For instance on changing the `text` attribute of a post:
```json
{
    "text": "EDIT: updated text of the comment.",
    "dateUpdated": "integer unix epoch in millis"
}
```

Any attribute (except `dateCreated`) is optional to add in the request body. `dateUpdated` is mandatory. `dateCreated` is not allowed.

# response

If *any* post attribute is changed:

```json
{
    "result": "ok"
}
```

If *none* of the post attributes is changed:

```json
{
    "result": "updated"
}
```
