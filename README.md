# graylog-node-winston-express

Just an express skeleton to combine Logs to your graylog server ! 

Based on 

Node-graylog2 : <https://github.com/Wizcorp/node-graylog2>  
Winston-graylog2 : <https://github.com/namshi/winston-graylog2>  
express-winston : <https://github.com/namshi/winston-graylog2#readme> 



## How to use

	Clone repo
	$ npm install
	$ cp .env.sample .env
	=> Edit your env file with server detail 
	$ nano .env
	$ npm start
	=> Check logs in Graylog server
	
Express instantiation visible on **app.js**
Logger declaration on **utils/logs.js**
Logger usage on **routes/index.js**
	
## Configure your Graylog server : 

Extract from Node-graylog2 : <https://github.com/Wizcorp/node-graylog2>  

This module will send its data as GELF packets to Graylog2. In order to see your data in the correct format you need to create a GELF Input in your Graylog2 application. 

You can do this by following these instructions:

1. Go to System -> Inputs

<div align="center">
    <img src="https://raw.githubusercontent.com/Wizcorp/node-graylog2/master/imgs/graylog_config_1.png">
</div>

2. Select a GELF Input type. In this case we will be using GELF UDP as it doesn't need any additional configuration.

<div align="center">
    <img src="https://raw.githubusercontent.com/Wizcorp/node-graylog2/master/imgs/graylog_config_2.png">
</div>

3. Select the Nodes that will read the new Input type.

<div align="center">
    <img src="https://raw.githubusercontent.com/Wizcorp/node-graylog2/master/imgs/graylog_config_3.png">
</div>

4. Launch the new input!

<div align="center">
    <img src="https://raw.githubusercontent.com/Wizcorp/node-graylog2/master/imgs/graylog_config_4.png">
</div>

