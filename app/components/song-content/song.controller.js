import angular from "angular";

export default [function() {
  const vm = this;
  vm.song = localStorage.getItem('selected-song');

  vm.$onInit = () => {
    if (vm.song) {
      vm.song = JSON.parse(vm.song);
      const obj = angular.element('<object></object>').attr({
        data: vm.song.link,
        width: '1500px',
        height: '2000px'
      });

      document.querySelector('#frame-window').appendChild(obj[0]);
    }
  };
}];