import {Injectable} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';

@Injectable()
export class SeoService {

  constructor(private meta: Meta, private title: Title) {
  }

  generateTags(config) {
    config = {
      title: '',
      description: '',
      image: '',
      slug: '',
      ...config
    };
    this.title.setTitle(config.title);
    this.meta.updateTag({name: 'keywords', content: config.keywords});
    this.meta.updateTag({name: 'description', content: config.description});

    this.meta.updateTag({name: 'twitter:card', content: 'summary'});
    this.meta.updateTag({name: 'twitter:site', content: '@MHT'});
    this.meta.updateTag({name: 'twitter:title', content: config.title});
    this.meta.updateTag({name: 'twitter:description', content: config.description});
    this.meta.updateTag({name: 'twitter:image', content: config.image});

    this.meta.updateTag({property: 'og:type', content: 'article'});
    this.meta.updateTag({property: 'og:site_name', content: 'MHT'});
    this.meta.updateTag({property: 'og:title', content: config.title});
    this.meta.updateTag({property: 'og:description', content: config.description});
    this.meta.updateTag({property: 'og:image', content: config.image});
    this.meta.updateTag({property: 'og:url', content: `https://mht.business/${config.slug}`});
  }

}
