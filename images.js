import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });

  //create tab in browser
  const page = await browser.newPage();

  // open a page
  await page.goto(
    "https://www.primevideo.com/detail/0ON3C9RR7SFTW5XDS9CWW13ZWI/ref=atv_hm_fcv_prime_sd_mv_play_t1ACAAAAAA0wh0?autoplay=1&t=0"
  );
  await page.screenshot({ path: "./images/snapped.jpg", fullPage: true });
  //close browser
  await browser.close();
})();
