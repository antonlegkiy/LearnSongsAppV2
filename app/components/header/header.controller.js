export default ['$state', function ($state) {
  const vm = this;

  vm.getSelectedRoute = () => {
    return $state.current.name;
  };
}];