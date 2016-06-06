describe("app", function() {
  it("should get home page title", function() {
    browser.get('/');
    expect(browser.getTitle()).toEqual("News Summary");
  });

  it('can add a greeting', function() {
    browser.get('/');
    $('#new-greeting').sendKeys('Hola');
    $('#add-greeting').click();
    var greeting = $$('#greetings p').last().getText();

    expect(greeting).toEqual('Hola');
  });
});
