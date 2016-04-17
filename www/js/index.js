require('script!phaser/dist/phaser.min.js');


import CustomText from './core/customtext.js';



/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
  // Application Constructor
  initialize: function () {
    this.bindEvents();
  },
  // Bind Event Listeners
  //
  // Bind any events that are required on startup. Common events are:
  // 'load', 'deviceready', 'offline', and 'online'.
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  // deviceready Event Handler
  //
  // The scope of 'this' is the event. In order to call the 'receivedEvent'
  // function, we must explicitly call 'app.receivedEvent(...);'
  onDeviceReady: function () {
    //  app.receivedEvent('deviceready');
    var game = new Phaser.Game(600, 800, Phaser.AUTO, 'gameCanvas', {
      create: create
    });

    function create() {
      // Add text in the middle
      var text = new CustomText(game, game.world.centerX, game.world.centerY, 'Hello World!');
      game.add.existing(text);
    }

    // If not desktip scale the application to match the screen
    if (!game.device.desktop) {
      debugger;
      alert('Adapt screen');
      // Set the type of scaling to 'show all'
      game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
      // Add a blue color to the page, to hide the white borders we might have
      document.body.style.backgroundColor = '#3498db';
      // Set the min and max width/height of the game
      game.scale.minWidth = 600;
      game.scale.minHeight = 800;
      game.scale.maxWidth = 1080;
      game.scale.maxHeight = 1920;
      // Center the game on the screen
      game.scale.pageAlignHorizontally = true;
      game.scale.pageAlignVertically = true;
      // Apply the scale changes
      game.scale.setScreenSize(true);
    }
  },
  // Update DOM on a Received Event
  receivedEvent: function (id) {
    var parentElement = document.getElementById(id);
    var listeningElement = parentElement.querySelector('.listening');
    var receivedElement = parentElement.querySelector('.received');

    listeningElement.setAttribute('style', 'display:none;');
    receivedElement.setAttribute('style', 'display:block;');

    console.log('Received Event: ' + id);
  }
};

app.initialize();
