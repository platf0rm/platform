method | endpoint | definition |
-------|----------|------------|
patch  | /api/threads/**{threadID}** | Patches an existing thread for changes

# url params
`threadID`

# request

For instance on changing the `description` attribute of a post:
```json
{
    "description": "updated description of post",
    "dateUpdated": "integer unix epoch in millis"
}
```

For updating the `title` attribute of a post:

```json
{
    "title": "[EDIT] this is a new title",
    "dateUpdated": "integer unix epoch in millis"
}
```

Any attribute (except `dateCreated`) is optional to add in the request body. `dateUpdated` is mandatory. `dateCreated` is not allowed.

# response

If *any* post attribute is changed:

```json
{ "result": "ok" }
```

If *none* of the post attributes is changed:

```json
{ "result": "updated" }
```
