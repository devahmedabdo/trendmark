import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'trend-mark-media';
  activeMenu: boolean = false;
  reflectActiveMenu() {
    this.activeMenu = !this.activeMenu;
  }
  services: any = [
    {
      name: 'OUTBOUND APPOINT. ',
      icon: 'bag.svg',
      dis: `We'll proactively reach out to leads and 
      schedule appointments on your behalf.`,
    },
    {
      name: 'INBOUND APPOINT. ',
      icon: 'chat.svg',
      dis: `We will help you convert potential customers 
      who are seeking your product or service.`,
    },
    {
      name: 'GOOGLE ADS ',
      icon: 'google.svg',
      dis: `We use Google to put your business in front of 
      people who are searching for what you offer.`,
    },
    {
      name: 'INSTAGRAM ADS ',
      icon: 'instagram.svg',
      dis: `Our targeted Facebook ads reach your ideal 
      customers and drive traffic to your website.`,
    },
    {
      name: 'FACEBOOK ADS ',
      icon: 'facebook.svg',
      dis: `Our engaging Instagram ads tell your brand 
      story and inspire your audience to take action.`,
    },
    {
      name: 'TIKTOK ADS ',
      icon: 'tiktok.svg',
      dis: `Our creative TikTok ads help your brand get 
      noticed by the next generation of customers.`,
    },
  ];
  ngOnInit(): void {
    window.addEventListener('scroll', () => {
      this.activeMenu = false;
    });
  }
}
