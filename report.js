const newman = require('newman');

newman.run({
    collection: require('./User_Practice.postman_collection'), //
    // environment: require('./User_Practice.postman_collection'), // pointing
    iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
        }
}
}, function (err) {
if (err) { throw err; }
console.log('collection run complete!');
});