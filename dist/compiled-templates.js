angular.module("key-value-editor").run(["$templateCache", function($templateCache) {$templateCache.put("key-value-editor.html","<ng-form name=\"forms.keyValueEditor\" novalidate ng-if=\"entries\">\n  <!-- may use ng-messages for better validation, if needed -->\n  <div class=\"key-value-editor\" ng-model=\"entries\" as-sortable=\"dragControlListeners\">\n    <div\n      class=\"key-value-editor-entry\"\n      ng-class-odd=\"\'odd\'\"\n      ng-class-even=\"\'even\'\"\n      ng-repeat=\"entry in entries\"\n      as-sortable-item>\n      <div\n        class=\"form-group key-value-editor-input\"\n        ng-class=\"{ \'has-error\' :  (forms.keyValueEditor[\'key-\' + $index].$invalid) }\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          ng-class=\"{ \'{{setFocusClass}}\' : $last  }\"\n          id=\"key-{{$index}}\"\n          name=\"key-{{$index}}\"\n          placeholder=\"{{keyPlaceholder}}\"\n          ng-minlength=\"{{keyMinlength}}\"\n          maxlength=\"{{keyMaxlength}}\"\n          ng-model=\"entry.name\"\n          ng-readonly=\"isReadonlyAny || isReadonlySome(entry.name) || entry.isReadonlyKey || entry.isReadonly || entry.containsSecret\"\n          ng-pattern=\"validation.key\"\n          ng-value\n          ng-attr-key-value-editor-focus=\"{{$last}}\">\n        <span\n          class=\"help-block\"\n          ng-show=\"(forms.keyValueEditor[\'key-\' + $index].$error.pattern)\">\n          <span>{{ entry.keyValidatorError || keyValidatorError ||  \'validation error\' }}</span>\n          <span ng-if=\"entry.keyValidatorErrorTooltip || keyValidatorErrorTooltip\" class=\"help action-inline\">\n            <a aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"{{entry.keyValidatorErrorTooltip || keyValidatorErrorTooltip}}\">\n              <i class=\"{{entry.keyValidatorErrorTooltipIcon || keyValidatorErrorTooltipIcon}}\"></i>\n            </a>\n          </span>\n        </span>\n        <span\n          class=\"help-block\"\n          ng-show=\"(forms.keyValueEditor[\'key-\' + $index].$error.minlength)\">\n          <span>Minimum character count is {{keyMinlength}}</span>\n        </span>\n      </div>\n      <div\n        class=\"form-group key-value-editor-input\"\n        ng-class=\"forms.keyValueEditor[\'value-\' + $index].$invalid ? \'has-error\' : \'\'\">\n        <div class=\"input-group\" ng-if=\"entry.containsSecret\">\n          <span class=\"input-group-addon\">\n            <span class=\"{{entry.secretValueIcon || secretValueIcon}}\" aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"{{entry.secretValueTooltip || secretValueTooltip}}\"></span>\n          </span>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            id=\"value-{{$index}}\"\n            name=\"value-{{$index}}\"\n            placeholder=\"{{valuePlaceholder}}\"\n            ng-minlength=\"{{valueMinlength}}\"\n            ng-maxlength=\"{{valueMaxlength}}\"\n            ng-model=\"entry.value\"\n            ng-readonly=\"isReadonlyAny || isReadonlySome(entry.name) || entry.isReadonly || entry.containsSecret\"\n            ng-pattern=\"validation.val\">\n        </div>\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          id=\"value-{{$index}}\"\n          name=\"value-{{$index}}\"\n          placeholder=\"{{valuePlaceholder}}\"\n          ng-minlength=\"{{valueMinlength}}\"\n          maxlength=\"{{valueMaxlength}}\"\n          ng-model=\"entry.value\"\n          ng-readonly=\"isReadonlyAny || isReadonlySome(entry.name) || entry.isReadonly || entry.containsSecret\"\n          ng-pattern=\"validation.val\"\n          ng-if=\"!entry.containsSecret\">\n        <span\n          class=\"help-block\"\n          ng-show=\"(forms.keyValueEditor[\'value-\' + $index].$error.pattern)\">\n          <span>{{ entry.valueValidatorError || valueValidatorError ||  \'validation error\' }}</span>\n          <span ng-if=\"entry.valueValidatorErrorTooltip || valueValidatorErrorTooltip\" class=\"help action-inline\">\n            <a aria-hidden=\"true\" data-toggle=\"tooltip\" data-placement=\"top\" data-original-title=\"{{entry.valueValidatorErrorTooltip || valueValidatorErrorTooltip}}\">\n              <i class=\"{{entry.valueValidatorErrorTooltipIcon || valueValidatorErrorTooltipIcon}}\"></i>\n            </a>\n          </span>\n        </span>\n        <span\n          class=\"help-block\"\n          ng-show=\"(forms.keyValueEditor[\'value-\' + $index].$error.minlength)\">\n          <span>Minimum character count is {{valueMinlength}}</span>\n        </span>\n      </div>\n      <div class=\"key-value-editor-buttons\">\n        <span\n          ng-if=\"(!cannotSort)\"\n          class=\"fa fa-bars\"\n          role=\"button\"\n          aria-label=\"Move row\"\n          aria-grabbed=\"false\"\n          as-sortable-item-handle></span>\n        <span\n          class=\"pficon pficon-close as-sortable-item-delete\"\n          role=\"button\"\n          aria-label=\"Delete row\"\n          ng-hide=\"cannotDeleteAny || cannotDeleteSome(entry.name) || entry.cannotDelete\"\n          ng-click=\"deleteEntry($index, 1)\"></span>\n      </div>\n    </div>\n\n    <!-- the last one, placeholder -->\n    <div\n      class=\"key-value-editor-entry\"\n      ng-if=\"!cannotAdd\">\n      <div\n        class=\"form-group key-value-editor-input\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{keyPlaceholder}}\"\n          ng-focus=\"onFocusLast()\">\n      </div>\n      <div\n        class=\"form-group key-value-editor-input\">\n        <input\n          type=\"text\"\n          class=\"form-control\"\n          placeholder=\"{{valuePlaceholder}}\"\n          ng-focus=\"onFocusLast()\">\n      </div>\n    </div>\n  </div>\n\n</ng-form>\n");}]);