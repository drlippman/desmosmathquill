suite('quickPlusMinus', function () {
  const $ = window.test_only_jquery;
  var mq;
  setup(function () {
    mq = MQ.MathField($('<span></span>').appendTo('#mock')[0], {
      quickPlusMinus: true
    });
    rootBlock = mq.__controller.root;
    controller = mq.__controller;
    cursor = controller.cursor;
  });

  test('base plusminus', function () {
    mq.latex('3');
    mq.typedText('+-');
    assert.equal(mq.latex(), '3\\pm');
  });

});
