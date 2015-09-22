studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope) {
  $scope.students = StudentsFactory.students;
  $scope.addStudentWithPermissionSlip = function(student) {
    student.permissionSlip = true;
  };
});
