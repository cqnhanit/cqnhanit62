import {Component, OnInit} from '@angular/core';
import {SeoService} from '../../services/seo.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  constructor(
    private seoService: SeoService
  ) { }

  ngOnInit() {
    console.log('init', this.constructor.name);
    this.seoService.generateTags({
      title: 'Contact Page',
      description: 'Description Contact Page',
      image: 'https://mht.business/images/mht_logo1.png',
      slug: '',
      keywords: 'MHT'
    });
  }

}
