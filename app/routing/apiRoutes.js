const friends = require('../data/friends')

module.exports = (app) => { 
    
    app.get('/api/friends', (req, res) => {
        res.send(friends);
    });

    app.post('/api/friends', (req,res) => {
        const userAnswers = Object.values(req.body.questions.map(q => q.value));
        const differences = friends.map(friend => {
            let totalDifference = 0;
            friend.scores.forEach((score, index) => {
                const difference = score - userAnswers[index];
                totalDifference += Math.abs(difference);
            });
            return totalDifference;
        });
        const min = Math.min(...differences);
        const minIndex = differences.indexOf(min);
        const bestMatch = friends[minIndex];
        res.send(bestMatch);
    });
} 

//var es5
//const let es6