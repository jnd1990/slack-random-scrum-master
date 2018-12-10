let express = require('express')
let axios = require('axios')
let schedule = require('node-schedule');
let config = require('./config.js')
let app = express()
let validPerson = false;
let slackWebhookURL = config.slackWebhookURL
let slackToken = config.slackToken
let channelID = config.channelID
let scheduledTime = config.scheduledTime
let excludeWithStatus = config.excludeWithStatus
const getRandom = (response) => {

    let memberList = response.data.members
    let randomPerson = memberList[Math.floor(Math.random() * memberList.length)];

    axios.get(`https://slack.com/api/users.info?token=${slackToken}&user=${randomPerson}`)
    .then(function (response) {
        
        let displayName = response.data.user.profile.display_name
        let statusText = response.data.user.profile.status_text
        // Exclude members with excluded statuses
        let notAvailable = excludeWithStatus.includes(statusText)
        
        if(!notAvailable && displayName != ""){
            const text = {
            text: `Morning! <@${displayName}> is scrum master today`,
            
        }
            validPerson = true;
            axios.post(`${slackWebhookURL}?link_names=1`, JSON.stringify(text))

        } else {
            return false;
        }
    })
}
 
app.listen(3000, function () {
setTimeout(function(){ 
    schedule.scheduleJob(`${scheduledTime}`, function(){
        // Get the list of members in the slack channel
        axios.get(`https://slack.com/api/conversations.members?token=${slackToken}&channel=${channelID}`)
        // Run the function until a valid person is found
        .then(function(response){
            do {
                getRandom(response)
            } while (validPerson)

        });
       
    });
}, 1000);
})