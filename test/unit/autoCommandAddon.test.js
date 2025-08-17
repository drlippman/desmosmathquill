suite('autoCommandAddon', function () {
  const $ = window.test_only_jquery;
  var mq;
  setup(function () {
    mq = MQ.MathField($('<span></span>').appendTo('#mock')[0], {
      autoCommands: 'pi ^sqrt'
    });
    rootBlock = mq.__controller.root;
    controller = mq.__controller;
    cursor = controller.cursor;
  });

  test('no start marker', function () {
    mq.typedText('pi');
    assert.equal(mq.latex(), '\\pi');
  });
  test('no start marker after letter', function () {
    mq.typedText('api');
    assert.equal(mq.latex(), 'a\\pi');
  });
  test('start marker', function () {
    mq.typedText('sqrt');
    assert.equal(mq.latex(), '\\sqrt{ }');
  });
  test('start marker after letter', function () {
    mq.typedText('asqrt');
    assert.equal(mq.latex(), 'asqrt');
  });
  test('start marker after number', function () {
    mq.typedText('2sqrt');
    assert.equal(mq.latex(), '2\\sqrt{ }');
  });

});
