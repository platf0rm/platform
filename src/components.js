/**
 * Entry point of the script.
 * @author platf0rm
 */

//require('bootstrap-material-design/scripts/index');

require('./style.scss');
const mdc = require('material-components-web');

setTimeout(initInteractiveLists, 250);

function initInteractiveLists() {
    let i,
        li,
        interactiveListItems = document.getElementsByTagName('main')[0].querySelectorAll('.mdc-list-item');
    for (i = 0; li = interactiveListItems[i]; i++) {
        mdc.ripple.MDCRipple.attachTo(li);
        // Prevent link clicks from jumping demo to the top of the page
        li.addEventListener('click', function(evt) {
            evt.preventDefault();
        });
    }
}

