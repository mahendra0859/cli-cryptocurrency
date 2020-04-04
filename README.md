# cli-cryptocurrency

Node.js CLI For Cryptocurrency Prices

Command line interface written in Node.js to check cryptocurrency prices

Register an API key at https://nomics.com

Demo Api key : demo-26240835858194712a4f8cc0dc635c7a

## Usage

```
# To install npm modules #
$ npm install

# To link the module #
$ sudo npm link

# To check the module exist or not #
$ sudo npm ls --global cryptocurrency

# To remove the linked module #
$ sudo npm rm --global cryptocurrency
```

## Commands

```
# Help & Commands
cryptocurrency -h

# Version
cryptocurrency -V

# API Key Commands
cryptocurrency key set
cryptocurrency key show
cryptocurrency key remove

# Crypto Check Commands
cryptocurrency check price

# Check Specific Coins (default: BTN,ETH,XRP)
cryptocurrency check --coin=BTC,ETH

# Choose Currency (Default: USD)
cryptocurrency check --cur=INR
```

# Preview

![](https://media.giphy.com/media/db4T7hN692xbkMjiYf/giphy.gif)

- Youtube link : https://www.youtube.com/watch?v=-6OAHsde15E
- Real-time crypto market cap rankings: https://nomics.com/
- Api Documention : http://docs.nomics.com/#tag/Currencies
