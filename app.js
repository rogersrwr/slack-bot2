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

const channelId = procsess.env.CHANNEL;    



await app.start(process.env.PORT || 3002 );
console.log(' app is running??');



const app1 = express();
const PORT = 3001;


// Middleware to parse JSON bodies
app.use(express.json());




// Route to handle POST requests
app.post('/slack', async (req, res) => {
  const data = req.body;
  //const { counter } = req.body;

  // Process the received data
  console.log('Data received:', data);

  // Execute your code here based on the received data
  // For example:
  if (data.action === 'start') {
      console.log('Starting process...');
      // Code to start a process
  } else if (data.action === 'stop') {
      console.log('Stopping process...');
      // Code to stop a process
  }


  if (data.action === 'talk') {
    //console.log('Starting process...');
    // Code to start a process
    await app1.client.chat.postMessage({
      token: process.env.O_AUTH,
      channel: channelId,
      "blocks": [
		{
			"type": "actions",
			"elements": [
				{
					"type": "radio_buttons",
					"options": [
						{
							"text": {
								"type": "plain_text",
								"text": " *run server 1* ",
								"emoji": true
							},
							"value": "value-0"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "*run server 2*",
								"emoji": true
							},
							"value": "value-1"
						},
						{
							"text": {
								"type": "plain_text",
								"text": "*Run server 3*",
								"emoji": true
							},
							"value": "value-2"
						}
					],
					"action_id": "actionId-0"
				}
			]
		}
	]
    });
  }



  // Send a response back to the client
  res.status(200).send('Data processed successfully');
});



//Create HTTP server
app.listen(PORT, () => {
  console.log(`HTTP server running on port ${PORT}`);
});


