// Install lodash package and import it for webpack solution
import _ from 'lodash';

function component() {
  const element = document.createElement('div');

  // If use Lodash, which is included via script: 
  // BAD: We wouldn't know apparently it depends on external library
  
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}

document.body.appendChild(component());