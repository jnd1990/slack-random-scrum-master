# Random Person Generator for Slack

Node service with sceduling to post message to a required channel, picking a random person from that channel

## Getting Started

Using the config.sample.js file as reference create a config.js with all config options complete

### Prerequisites

What things you need to install the software and how to install them

```
Slack Token e.g https://hooks.slack.com/services/SLACKWEBHOOKTOKEN
```

```
Slack Webhook bcd-123456789-123456789-123456789-123456789abcdefghik
```

```
Slack Channel ID e.g ABC123ABC
```

### Create a config.js file using sample config.sample.js

```
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
```

### Installing

A step by step series of examples that tell you how to get a development env running

Install node modules

```
npm i
```

start node service

```
node index.js
```
