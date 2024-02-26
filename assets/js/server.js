const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Serve static files (like blog.json)
app.use(express.static(path.join(__dirname, '../../../personal-website')));

// Endpoint to handle form submission and update blog.json
app.post('/submit-post', (req, res) => {
    const { title, date, content } = req.body;
    const newPost = { title, date, content };

    // Read existing posts from the JSON file
    fs.readFile(path.join(__dirname, '../../blog.json'), 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Error submitting post');
            return;
        }

        let existingPosts = JSON.parse(data || '[]');

        // Add the new post to existing posts
        existingPosts.push(newPost);

        // Write updated posts back to the JSON file
        fs.writeFile(path.join(__dirname, '../../blog.json'), JSON.stringify(existingPosts, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).send('Error submitting post');
            } else {
                console.log('Post submitted successfully!');
                // Send a JSON response indicating success
                res.json({ success: true });
            }
        });
    });
});

// Serve the blogpost.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../blogpost.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
