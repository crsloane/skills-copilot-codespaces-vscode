// Create web server
// 1. Load express module
const express = require('express');
// 2. Create express app
const app = express();
// 3. Load comments module
const comments = require('./comments');
// 4. Add endpoint to get comments
app.get('/comments', (req, res) => {
  res.json(comments.getComments());
});
// 5. Start the server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
// 6. Add new endpoint to add comment
app.post('/comments', (req, res) => {
  const { author, text } = req.body;
  comments.addComment(author, text);
  res.status(201).send('Comment added');
});
// 7. Add endpoint to delete comment
app.delete('/comments/:id', (req, res) => {
  const { id } = req.params;
  comments.deleteComment(id);
  res.status(200).send('Comment deleted');
});
// 8. Add endpoint to update comment
app.put('/comments/:id', (req, res) => {
  const { id } = req.params;
  const { author, text } = req.body;
  comments.updateComment(id, author, text);
  res.status(200).send('Comment updated');
});