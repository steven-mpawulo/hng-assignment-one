require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 5001;
app.get('/api', (req, res) => {
    const slack_name = req.query.slack_name;
    // console.log(slack_name);
    const track = req.query.track;
    // console.log(track);
    if (slack_name && track) {
        const daysOfTheWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const formatedDate = date.toISOString();
    const day = date.getDay();
    const dayOfTheWeek = daysOfTheWeek[day];
    res.status(200).json({
        "slack_name": slack_name,
        "current_day": dayOfTheWeek,
        "utc_time": formatedDate,
        "track": track,
        "github_file_url": "https://github.com/steven-mpawulo/hng-assignment-one/blob/main/server.js",
        "github_repo_url": "https://github.com/steven-mpawulo/hng-assignment-one",
        "status_code": 200
      });

    } else {
        res.status(400).json({"message": "please provide slack name and track"});
    }
    
});
app.listen(port, () => {
    // console.log(`Server started at port: ${port}`);
});