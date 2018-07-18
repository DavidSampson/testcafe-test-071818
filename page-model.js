import { Selector } from 'testcafe';

export default class Page {
    constructor () {
        this.topStories = Selector('ul.cn--idx-2 > li');
        this.kicker = Selector('ul.cn--idx-0 > li:first-child .cd__content > h3.cd__headline span.cd__headline-text strong');
    }
}
