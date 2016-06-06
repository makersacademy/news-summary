describe("NewsSummaryController", function() {
  var controller;

  beforeEach(module("newsSummaryApp"));

  beforeEach(inject(function($controller) {
    controller = $controller("NewsSummaryController");
  }));

  it('initializes with several greetings', function() {
    var greetings = [{one: 'Hello, world'},
                    {one: 'Hi, world'}];

    expect(controller.greetings).toEqual(greetings);
  });

  it('removes the last greeting', function() {
  var initialCount = controller.greetings.length;
  controller.deleteGreeting();

  expect(controller.greetings.length).toEqual(initialCount - 1);
  });

  it('adds a new greeting', function() {
    var initialCount = controller.greetings.length;
    controller.addGreeting('Hola');
    expect(controller.greetings.length).toEqual(initialCount + 1);
  });
});
