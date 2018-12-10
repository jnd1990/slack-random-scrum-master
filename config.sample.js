// Create a config.js file using this as an sample
module.exports = ({
    // e.g https://hooks.slack.com/services/SLACKWEBHOOKTOKEN
    slackWebhookURL: 'SLACK_WEBHOOK_TOKEN',
    // e.g abcd-123456789-123456789-123456789-123456789abcdefghik
    slackToken: 'SLACK_TOKEN',
    // e.g ABC123ABC
    channelID: 'CHANNEL_ID',
    // e.g 01 30 09 * * 1-5 (Every week day at 9:30am - https://www.npmjs.com/package/node-schedule)
    scheduledTime: '01 30 09 * * 1-5',
    // e.g ['On holiday', 'Working Remotely']
    excludeWithStatus: ['', '', ''],
})