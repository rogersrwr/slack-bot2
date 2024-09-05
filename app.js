const fs = require('fs');
//const https = require('https');
const express = require('express');
const path = require('path');
const { App } = require('@slack/bolt');
require('dotenv').config();



const app = new App({ 
  token: process.env.O_AUTH,
  signingSecret: process.env.SIGN_SECRET,
});

const channelId = process.env.CHANNEL;    




console.log(' app is running??');



const app1 = express();
const PORT = 4001;


// Middleware to parse JSON bodies
app1.use(express.json());




// Route to handle POST requests
app1.post('/slack', async (req, res) => {
  const data = req.body;
  //const { counter } = req.body;

  // Process the received data
  console.log('Data received:', data);

  // Execute your code here based on the received data
  // For example:
  if (data.action === 'start') {
      console.log('Starting process...');
      //await app.start(process.env.PORT || 3002 );
      // Code to start a process
  } else if (data.action === 'stop') {
      console.log('Stopping process...');
      // Code to stop a process
  }


  if (data.action === 'BA-target') {
    //console.log('Starting process...');
    // Code to start a process
    await app.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      text: 'Server Uptime Alert',
      blocks: [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Server Uptime Alert",
            "emoji": true
          }
        },
        {
          "type": "rich_text",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "target.brightarrow.com/r/ ",
                  "style": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": "  is not properly responding!"
                }
              ]
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<@U06JXTM3QSY>"
          }
        }
      ]
    });
  }


  if (data.action === 'BA-target100') {
    await app.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      text: 'Server Uptime Alert',
      blocks: [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Server Uptime Alert",
            "emoji": true
          }
        },
        {
          "type": "rich_text",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "T4 target100.brightarrow.com/r/ ",
                  "style": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": "  is not properly responding!"
                }
              ]
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<@U06JXTM3QSY>"
          }
        }
      ]
    });
  }

  if (data.action === 'BA-target1010') {
    await app.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      text: 'Server Uptime Alert',
      blocks: [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Server Uptime Alert",
            "emoji": true
          }
        },
        {
          "type": "rich_text",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "T10 target1010.brightarrow.com/r/ ",
                  "style": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": "  is not properly responding!"
                }
              ]
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<@U06JXTM3QSY>"
          }
        }
      ]
    });
  }

  if (data.action === 'BA-target1011') {
    await app.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      text: 'Server Uptime Alert',
      blocks: [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Server Uptime Alert",
            "emoji": true
          }
        },
        {
          "type": "rich_text",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "T11 target1011.brightarrow.com/r/ ",
                  "style": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": "  is not properly responding!"
                }
              ]
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<@U06JXTM3QSY>"
          }
        }
      ]
    });
  }

  if (data.action === 'BA-target1100') {
    await app.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      text: 'Server Uptime Alert',
      blocks: [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Server Uptime Alert",
            "emoji": true
          }
        },
        {
          "type": "rich_text",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "T12 target1100.brightarrow.com/r/ ",
                  "style": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": "  is not properly responding!"
                }
              ]
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<@U06JXTM3QSY>"
          }
        }
      ]
    });
  }

  if (data.action === 'BA-target1101') {
    await app.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      text: 'Server Uptime Alert',
      blocks: [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Server Uptime Alert",
            "emoji": true
          }
        },
        {
          "type": "rich_text",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "T13 target1101.brightarrow.com/r/ ",
                  "style": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": "  is not properly responding!"
                }
              ]
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<@U06JXTM3QSY>"
          }
        }
      ]
    });
  }

  if (data.action === 'BA-target1111') {
    await app.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      text: 'Server Uptime Alert',
      blocks: [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Server Uptime Alert",
            "emoji": true
          }
        },
        {
          "type": "rich_text",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "T15 target1111.brightarrow.com/r/ ",
                  "style": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": "  is not properly responding!"
                }
              ]
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<@U06JXTM3QSY>"
          }
        }
      ]
    });
  }

  if (data.action === 'BA-newtarget011') {
    await app.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      text: 'Server Uptime Alert',
      blocks: [
        {
          "type": "header",
          "text": {
            "type": "plain_text",
            "text": "Server Uptime Alert",
            "emoji": true
          }
        },
        {
          "type": "rich_text",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "T3 newtarget011.brightarrow.com/r/ ",
                  "style": {
                    "bold": true
                  }
                },
                {
                  "type": "text",
                  "text": "  is not properly responding!"
                }
              ]
            }
          ]
        },
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "<@U06JXTM3QSY>"
          }
        }
      ]
    });
  }





  // Send a response back to the client
  res.status(200).send('Data processed successfully');
});



//Create HTTP server
app1.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT}`);
});


