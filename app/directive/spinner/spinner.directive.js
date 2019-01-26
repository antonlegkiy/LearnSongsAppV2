import template from './spinner.tmpl.html';

export default function spinnerDirective () {
  return {
    restrict: 'EA',
    scope: { enable: '=' },
    template
  }
}