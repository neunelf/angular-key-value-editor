//
// Keeping for reference for now, is a good example of rendering a few different
// times for tests & reusing code to keep the test DRY.  however, testing
// input validation via a unit test is a pain/doesn't consistently run well in
// various environments. 
//
//
// 'use strict';
//
// describe('keyValueEditor validation', function() {
//
//   beforeEach(module('key-value-editor'));
//
//   beforeEach(function() {
//     setup();
//   });
//
//   afterEach(function() {
//     tearDown();
//   });
//
//
//   var withValidation = function() {
//     elem = angular.element('<key-value-editor ' +
//                               'entries="entries" ' +
//                               'key-validator="validation.key" ' +
//                               'value-validator="validation.value"></key-value-editor>');
//   };
//
//   var withValidationRegex = function() {
//     elem = angular.element('<key-value-editor ' +
//                               'entries="entries" ' +
//                               'key-validator-regex="validation.key" ' +
//                               'value-validator-regex="validation.value"></key-value-editor>');
//   };
//
//   var withValidationString = function() {
//     elem = angular.element('<key-value-editor ' +
//                               'entries="entries" ' +
//                               'key-validator="[a-zA-Z0-9_]*" ' +
//                               'value-validator="[a-zA-Z0-9_]*"></key-value-editor>');
//   };
//
//   // SO, events dont work well with headless-firefox, phantomJS, etc
//   // seems that these kinds of tests should be e2e anyway
//   // stick to actal direct testing of JS functions with unit tests
//   // and put all the e2e stuff in the e2e folder.
//   // journey :)
//   // the standard sweep of input testing
//   var testInputValidation = function() {
//     var input = $('input:text').first();
//     var angInput = angular.element(input);
//     // initially valid
//     expect(input.hasClass('ng-invald')).toBe(false);
//     expect(input.hasClass('ng-valid')).toBe(true);
//     // pass invalid input
//     angInput.val('$@#').trigger('input').triggerHandler('input');
//     scope.$digest();
//     expect( input.hasClass('ng-invalid') ).toBe(true);
//     expect( input.hasClass('ng-valid') ).toBe(false);
//     // pass valid input
//     angInput.val('happy').trigger('input').triggerHandler('input');
//     scope.$digest();
//     expect( input.hasClass('ng-invalid') ).toBe(false);
//     expect( input.hasClass('ng-valid') ).toBe(true);
//   };
//
//   describe('when given a validation string', function() {
//     it('validates inputs via the provided string', function() {
//       withValidationString();
//       noEntries();
//       render();
//       scope.$apply();
//       testInputValidation();
//
//     });
//   });
//
//   describe('when passed an external validation string (such as from a controller)', function() {
//     it('validates inputs via the provided string', function() {
//       noEntries();
//       withValidation();
//       render();
//       // to pick up other attributes, need to update the isolateScope & apply it.
//       var isolate = elem.isolateScope();
//       isolate.validation = {
//         key: '[a-zA-Z0-9_]*',
//         value: '[a-zA-Z0-9_]*'
//       };
//       scope.$apply();
//       testInputValidation();
//     });
//   });
//
//   describe('when passed a validation regex', function() {
//     it('validates the inputs via the regex', function() {
//       noEntries();
//       withValidationRegex();
//       render();
//       // to pick up other attributes, need to update the isolateScope & apply it.
//       var isolate = elem.isolateScope();
//       isolate.validation = {
//         // a real regex, either constructor style is fine:
//         // key: new RegExp(/^[a-zA-Z0-9-_]+$/),
//         key: new RegExp('^[a-zA-Z0-9-_]+$'),
//       };
//       scope.$apply();
//       testInputValidation();
//     });
//   });
//
//   describe('when passed a validation function (simulated regex)', function() {
//     it('validates the inputs via the function', function() {
//       noEntries();
//       withValidationRegex();
//       render();
//       // to pick up other attributes, need to update the isolateScope & apply it.
//       var isolate = elem.isolateScope();
//       var someComplexTest = function(val) {
//         return /^[a-zA-Z0-9_]*$/.test(val);
//       };
//       isolate.validation = {
//         // a simulated regex. this is handy for doing complicated things via
//         // the .test() method, which could call other functions, etc.
//         key: {
//           test: function(val) {
//             return someComplexTest(val);
//           }
//         }
//       };
//       scope.$apply();
//       testInputValidation();
//     });
//   });
//
// });
