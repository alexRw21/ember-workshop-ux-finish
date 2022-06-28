import { module, test } from 'qunit';
import { setupTest } from 'ember-workshop/tests/helpers';

module('Unit | Route | recipes/detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:recipes/detail');
    assert.ok(route);
  });
});