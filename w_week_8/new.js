const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com/products');

  const products = await page.evaluate(() => {
    const productList = [];
    document.querySelectorAll('.product').forEach(product => {
      const name = product.querySelector('h2').innerText.trim();
      const price = product.querySelector('.price').innerText.trim();
      const description = product.querySelector('.description').innerText.trim();
      productList.push({ name, price, description });
    });
    return productList;
  });

  console.log(products);

  await browser.close();
})();
