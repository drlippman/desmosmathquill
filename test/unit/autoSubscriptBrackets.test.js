suite('autoSubscriptBrackets', function () {
  const $ = window.test_only_jquery;
  var mq;
  setup(function () {
    mq = MQ.MathField($('<span></span>').appendTo('#mock')[0], {
      autoSubscriptBrackets: true
    });
    rootBlock = mq.__controller.root;
    controller = mq.__controller;
    cursor = controller.cursor;
  });

  test('auto subscripting bracket', function () {
    mq.latex('\\left(HO\\right)');
    mq.typedText('2');
    assert.equal(mq.latex(), '\\left(HO\\right)_{2}');
    mq.typedText('3');
    assert.equal(mq.latex(), '\\left(HO\\right)_{23}');
  });

});
