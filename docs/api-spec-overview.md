# API spec overview

method | endpoint | definition | 
-------| -------- | ---------- |
get    | /api/threads | get a list of threads
get    | /api/threads/**{threadID}**/comments | returns a comments in a certain thread
get    | /api/comments/**{commentID}** | returns a comment
get    | /api/votes/**{postID** | gets the number of votes to a post (thread, comment)
get    | /api/media/**{mediaId}** | gets media details
post   | /api/threads/ | creates a new thread
post   | /api/threads/**{threadID}**/comments | creates a new comment
post   | /api/votes/**{postID}**/**{direction}** | cast up/down vote to a post (thread, comment)
post   | /api/media | create a new media post/attachment
