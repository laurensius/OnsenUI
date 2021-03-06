/**
 * @ngdoc directive
 * @id list-header
 * @name ons-list-header
 * @param modifier
 * @description
 *    [en]Header element for list items. Must be put inside ons-list component.[/en]
 *    [ja]リスト要素に使用するヘッダー用コンポーネント。ons-listと共に使用します。[/ja]
 * @seealso ons-list [en]ons-list component[/en][ja]ons-listコンポーネント[/ja]
 * @seealso ons-list-item [en]ons-list-item component[/en][ja]ons-list-itemコンポーネント[/ja]
 * @guide UsingList [en]Using lists[/en][ja]リストを使う[/ja]
 * @codepen yxcCt
 */
(function() {
  'use strict';

  var module = angular.module('onsen');

  module.directive('onsListHeader', function($onsen) {
    return {
      restrict: 'E',

      // NOTE: This element must coexists with ng-controller.
      // Do not use isolated scope and template's ng-transclude.
      replace: false,
      transclude: false,

      compile: function(elem, attrs, transcludeFn) {
        var templater = $onsen.generateModifierTemplater(attrs);
        elem.addClass('list__header ons-list-header-inner');
        elem.addClass(templater('list__header--*'));
      }
    };
  });
})();
