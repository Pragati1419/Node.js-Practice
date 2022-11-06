// Events Module

/**
 
Node.js has a built-in module , called "Events",
where you can create- , fire- , and listen for- your own events.EventEmitter

Example 1 : Registering for the events to be fired only one time using once.

Example 2 : Create an event emitter instance and register a couple of callbacks.

Example : Registering for the event with callbacks parameters.

*/

const EventEmitter = require("events");
const event = new EventEmitter();
 /*

event.on('sayMyName', () => {
 console.log("Your name is Pragati");

});

event.on('sayMyName', () => {
    console.log("Kumari");
   
   });

 */

/* The concept is quite simple: Emmiters objects emit named events 
that cause previously registered listners to be called . So , an emitter objects basically has two main features.

Emitting name events.
Registering and Unregistering listener functions.js

*/
event.on("checkPage", (sc , msg) => {
    console.log(`status code is ${sc} and the page is ${msg}`);
});

event.emit("checkPage" , "200" , "ok");



