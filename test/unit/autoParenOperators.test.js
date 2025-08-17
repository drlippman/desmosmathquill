suite('autoParenOperators', function () {
  const $ = window.test_only_jquery;
  var mq;
  setup(function () {
    mq = MQ.MathField($('<span></span>').appendTo('#mock')[0], {
      autoParenOperators: true,
      charsThatBreakOutOfSupSubVar: '('
    });
    rootBlock = mq.__controller.root;
    controller = mq.__controller;
    cursor = controller.cursor;
  });

  test('auto paren number', function () {
    mq.latex('\\sin');
    mq.typedText('2');
    assert.equal(mq.latex(), '\\sin\\left(2\\right)');
  });
  test('auto paren var', function () {
    mq.latex('\\sin');
    mq.typedText('x');
    assert.equal(mq.latex(), '\\sin\\left(x\\right)');
  });
  test('auto paren paren', function () {
    mq.latex('\\sin');
    mq.typedText('(');
    assert.equal(mq.latex(), '\\sin\\left(\\right)');
  });
  test('auto paren do not if another operator', function () {
    mq.latex('\\sin');
    mq.typedText('h');
    assert.equal(mq.latex(), '\\sinh');
  });
  test('auto paren after subscript', function () {
    mq.latex('\\log_{2}');
    mq.typedText('x');
    assert.equal(mq.latex(), '\\log_{2}\\left(x\\right)');
  });
  test('auto paren after superscript', function () {
    mq.latex('\\sin^{2}');
    mq.typedText('x');
    assert.equal(mq.latex(), '\\sin^{2}\\left(x\\right)');
  });
  test('auto paren do not break out of subsup w charsThatBreakOutOfSupSubVar', function () {
    mq.typedText('x^sinx');
    assert.equal(mq.latex(), 'x^{\\sin\\left(x\\right)}');
  });
  test('auto paren value from write', function () {
    mq.latex('\\sin');
    mq.write('x');
    assert.equal(mq.latex(), '\\sin\\left(x\\right)');
  });
  test('auto paren value from write with paren', function () {
    mq.latex('\\sin');
    mq.write('\\left(x\\right)');
    assert.equal(mq.latex(), '\\sin\\left(x\\right)');
  });

});
