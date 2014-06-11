/**
 * Pipe an event from an event emitter to another.
 *
 * @param {string|string[]} events
 * @param {EventEmitter} source
 * @param {EventEmitter} target
 */

module.exports = function (events, source, target) {
  if (! Array.isArray(events)) events = [events];

  events.forEach(function (event) {
    source.on(event, function () {
      target.emit.apply(target, [event].concat(Array.prototype.slice.call(arguments, 0)));
    });
  });
};