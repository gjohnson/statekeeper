
/**
 * Mixes in "state" transition behavhior
 * into `obj`. If the `obj` supports `emit`
 * an event will be emitted with the next "state"
 * and any arguments passed.
 */

exports = module.exports = function(obj){

  /**
   * Current state.
   *
   * @type {String|Null}
   * @api private
   */

  obj._state = null;

  /**
   * Get or set a new "state".
   *
   * @param {String} next
   * @return {Mixed}
   * @api public
   */

  obj.state = function(next){
    var current = obj._state
      , args = [].slice.call(arguments, 1);

    if (next === undefined) return current;

    if (current !== next) {
      obj[next + 'At'] = new Date();
      obj._state = next;

      if (obj.emit) {
        obj.emit.apply(obj, [next].concat(args));
      }
    }

  };

};