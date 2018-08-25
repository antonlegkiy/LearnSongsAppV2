import template from './spinner.tmpl.html';

export default function () {
  return {
    restrict: 'EA',
    scope: { enable: '=' },
    template
  }
};