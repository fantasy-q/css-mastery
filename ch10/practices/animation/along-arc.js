/**
    * This script handles toggling of some states in the demo. It uses animation
    * events to trigger the adding and removing of class names to elements to
    * demonstrate controlling animations. If you're interested in how to use
    * CSS Animation events, read on.
    *
    * For the animation events, we need to add listeners for both the standardized
    * events as well as the prefixed versions. This is done via a helper 
    * function, adding & removing the listeners for us.
    * 
    * In this case, we want to listen to the event 'animationiteration',
    * which is fired when an iteration of an animation on an element is finished. 
    * This means we have to listen for the various prefixed versions as well.
    * WebKit-based browsers call this event 'webkitAnimationIteration', IE calls 
    * it 'MSAnimationIteration'. If you need to support older versions of Mozilla-
    * based browsers (e.g. Firefox), you need to use 'MozAnimationIteration' as
    * well, and older versions of Opera support 'oanimationiteration'.
    * 
    */

var icon = document.querySelector('.file-icon'), // The file icon element.
  pause = document.querySelector('.button-pause'), // play/pause button.
  stop = document.querySelector('.button-stop'), // stop/start button
  prefixes = ['webkit', 'MS', ""]; // List of prefixes to support.

// Helper function to generate prefixed versions of the event handlers.
function prefixedEvent(addOrRemove, prefixes, element, evt, callback) {
  console.log('prefixedEvent()');
  
  var l = prefixes.length;

  // Loop over all the prefixes to support and run either
  // element.addEventListener or element.removeEventListener, based
  // on the value of the addOrRemove argument.
  for (var current = 0; current < l; current++) {
    // set the event name to the lowercased standard version if no prefix.
    if (prefixes[current] === "") {
      evt = evt.toLowerCase();
      // animationiteration
    }
    element[addOrRemove + 'EventListener'](prefixes[current] + evt, callback, false);
    // icon.removeEventListener('webkitAnimationIteration', stopAnimation, false);
    // icon.addEventListener('MSAnimationIteration', stopAnimation, false);
  }
}

// Toggle stop/start
function toggleAnimation() {
  console.log('toggleAnimation()');
  // If we are starting, remove the listener to stop at the end of
  // the current iteration.
  if (icon.classList.contains('is-stopped')) {
    // We need 3 listeners to cover the most popular browsers today:
    prefixedEvent('remove', prefixes, icon, 'AnimationIteration', stopAnimation);
    icon.classList.remove('is-stopped');
  } else {
    // If we are stopping, wait for the iteration to finish.
    waitToStop();
  }
}

// Function to toggle play/pause state.
function pauseAnimation() {
  icon.classList.toggle('is-paused');

  icon.classList.contains('is-paused') ?
    console.log("Pause") :
    console.log("Play");
}
// Function to stop the animation.
function stopAnimation() {
  icon.classList.add('is-stopped');
  console.log('stopAnimation()');
}
// Function to add a listener for the animationiteration event.
function waitToStop() {
  prefixedEvent('add', prefixes, icon, 'AnimationIteration', stopAnimation);
}

// Finally, add event listeners for the buttons.
pause.addEventListener('click', pauseAnimation, false);
stop.addEventListener('click', toggleAnimation, false);
