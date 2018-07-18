import Page from './page-model';

const page = new Page();

const minNumOfTopStories = 5;


fixture `CNN Home Page Tests`
  .page `https://www.cnn.com/`;


test(`Ensure at least ${minNumOfTopStories} top stories `, async t => {
  await t.expect(page.topStories.count).gte(minNumOfTopStories);
});

test('Kicker contains text', async t=> {
  const anyTextRegex = /\S/;  //matches any non-whitespace character
  await t.expect(page.kicker.innerText).match(anyTextRegex);
});
