describe("Test", () => {
  
  it("handles an alert on the 2nd page", async () => {

    await browser.setWindowSize(1520, 958)
    await browser.url("file:///C:/pathtto/page1.html") //change this path to the path of page1
    await browser.$("body > a").click()

    await browser.pause(1000) //i need this pause to wait for the real page to load, which is not instantly as this example
    const handles = await browser.getWindowHandles()
    let SecondWindow = handles[1]
    await browser.switchToWindow(SecondWindow)
    await browser.acceptAlert()

    const elem = await $('body > h1')
    await expect(elem).toHaveText('Welcome to Page 2')
  });
});