# Congo Delivery Service

## Description

This is a 2d delivery game that utilizes a Ruby On Rails backend API serving JSON data via RESTful routes.  The data fetched from this API is then used to populate the game.  You have a certain amount of time to deliver the packages to each highlighted house via your delivery driver/van.

## Installation

1. You will need an IDE (Integrated Development Environment), I used Visual Studio Code (hereon referred to as "VSCode") and all of the following steps are tailored to VSCode.
   1. Depending on your operating system you should follow these instructions:
      1. [Windows](https://code.visualstudio.com/docs/setup/windows)
      2. [MacOS](https://code.visualstudio.com/docs/setup/mac)
      3. [Linux](https://code.visualstudio.com/docs/setup/linux)
2. You will need to clone the repo for this software and pull it up in VSCode.
   1. The following sub steps assume you have a previously configured SSH key to a GitHub account and that you have already set VSCode in your `PATH` to execute it from the terminal.
      1. In your terminal please navigate to the parent directory where you would like the directory for this software to be stored.
      2. Enter `git clone git@github.com:FluxOfPingIntegers/congo_client.git`
      3. Enter `code congo_client`
3. You will need to clone/run the repo for the backend for this software as well. Instructions can be found in the [README here](https://github.com/FluxOfPingIntegers/congo_api).
4. After starting up the associated backend Rails server described in the previous step, go back within this repo (the `congo_client` directory) in VSCode, right click on the file `index.html` and choose the option **Reveal all in Explorer**, then double click on the icon for it to open the frontend html file in your browser.  This is what you will use to play the game.

## Getting started

1. Sign in or create a user account.
2. Click the Start Button and begin driving via arrow keys, spacebar will allow the driver to exit the van with a new package.
3. Return to the van and repeat the process until all highlighted houses have been delivered to hopefully before the timer runs out.

## Contribute

This is a project I am building for school (and for fun) and I am not currently looking for contributors. This may change in the future though!

## Author

Ryan Schleck

## Flatiron student Acknowledgments

The very supportive Slack community at Flatiron Tech/Gems used:

- Javascript
- Ruby On Rails (backend)

## License

MIT License - Copyright 2021 Anyone Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
