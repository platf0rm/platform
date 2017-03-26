# API spec overview

method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads/**{threadID}**/comment/**{commentID}** | returns a comment in a certain thread
get    | /api/threads/**{threadID}**/comments | returns a comments in a certain thread
get    | /api/media/**{mediaId}** | gets media details
get    | /api/threads | get a list of threads
get    | /api/comment/**{commentID}**/votes | Gets the number of votes to a comment
get    | /api/threads/**{threadID}**/votes | Gets the number of votes to a thread
post   | /api/threads/**{threadID}**/comments| creates a new comment
post   | /api/threads/ | creates a new thread
post   | /api/comment/**{commentID}**/votes | submit vote to a comment
post   | /api/threads/**{threadID}**/votes | submit vote to a thread
