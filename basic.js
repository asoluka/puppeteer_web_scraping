import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  //create tab in browser
  const page = await browser.newPage();

  // open a page
  await page.setViewport({
    width: "100%",
    height: 1000,
    isMobile: false,
    isLandscape: true,
    hasTouch: false,
    deviceScaleFactor: 1,
  });
  await page.goto("https://google.ca");

  //close browser
  // await browser.close();
})();
