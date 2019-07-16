import { Injectable } from '@angular/core';
import { TopMenu, ImageSlider, Channel } from 'src/app/shared/components';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Ad, Product } from 'src/app/shared/domain';

@Injectable()
export class HomeService {
  

    // menus: TopMenu[] = [
    //     { id: 1,  title: 'HOT', link: 'hot' },
    //     { id: 2,  title: 'Weapon', link: 'weapon' },
    //     { id: 3,  title: 'Damage', link: 'damage' },
    //     { id: 4,  title: 'Critical Strike', link: 'critical_strike' },
    //     { id: 5,  title: 'Attack Speed', link: 'attack_speed' },
    //     { id: 6,  title: 'Lift Steal', link: 'life_steal' },
    //     { id: 7,  title: 'DEFENSE', link: 'defense' },
    //     { id: 8,  title: 'Health', link: 'health' },
    //     { id: 9,  title: 'Magic Resist', link: 'magic_resist' },
    //     { id: 10, title: 'Health Regen', link: 'health_regen' },
    //     { id: 11, title: 'Armor', link: 'armor' },
    //     { id: 12, title: 'MAGIC', link: 'magic' },
    //     { id: 13, title: 'Ability Power', link: 'ability_power' },
    //     { id: 14, title: 'Cooldown Reduction', link: 'cooldown_reduction' },
    //     { id: 15, title: 'Mana', link: 'mana' },
    //     { id: 16, title: 'Mana Regen', link: 'mana_regen' },
    //     { id: 17, title: 'MISC', link: 'misc' },
    //     { id: 18, title: 'Movement', link: 'movement' },
    //     { id: 19, title: 'Consumables', link: 'consumables' }
    // ];

    // imageSliders: ImageSlider[] = [
    //     { imgUrl: '../assets/image/image.jpg', link:'', caption:'' },
    //     { imgUrl: '../assets/image/image (1).jpg', link:'', caption:'' },
    //     { imgUrl: '../assets/image/image(2).jpg', link:'', caption:'' },
    //     { imgUrl: '../assets/image/image (3).jpg', link:'', caption:'' },
    //   ]
    
    //   channels: Channel[] = [
    //     {
    //       id: 1, icon: '../../../../assets/icon/icon-shield.png',
    //       title: 'Tank Favorites', link:''
    //     },
    //     {
    //       id: 2, icon: '../../../../assets/icon/icon-mana.png',
    //       title: 'Boots Mana', link:''
    //     },
    //     {
    //       id: 3, icon: '../../../../assets/icon/icon-magic-resist.png',
    //       title: 'Magic Resist', link:''
    //     },
    //     {
    //       id: 4, icon: '../../../../assets/icon/icon-health.png',
    //       title: 'Health Regen', link:''
    //     },
    //     {
    //       id: 5, icon: '../../../../assets/icon/icon-coin.png',
    //       title: 'Earn Money', link:''
    //     },
    //     {
    //       id: 6, icon: '../../../../assets/icon/icon-boot.png',
    //       title: 'Special Boots', link:''
    //     },
    //     {
    //       id: 7, icon: '../../../../assets/icon/icon-attack.png',
    //       title: 'Attack Enemies', link:''
    //     },
    //     {
    //       id: 8, icon: '../../../../assets/icon/icon-armor.png',
    //       title: 'Favorite Armors', link:''
    //     }
    //   ];

    constructor(private http: HttpClient) {

    }
    
    getTabs() {
        // return this.menus;
        return this.http.get<TopMenu[]>(`${environment.baseUrl}/tabs`, {
          params: {icode: `${environment.icode}`}
        });
    }

    getBanners() {
        // return this.imageSliders;
        return this.http.get<ImageSlider[]>(`${environment.baseUrl}/banners`, {
          params: {icode: `${environment.icode}`}
        });
    }

    getChannels() {
        // return this.channels;
        return this.http.get<Channel[]>(`${environment.baseUrl}/channels`, {
          params: {icode: `${environment.icode}`}
        });
    }

    getAdByTab(tab: string) {
      return this.http.get<Ad[]>(`${environment.baseUrl}/ads`, {
        params: {categories_like: tab}
      });
    }

    getProductsByTab(tab: string) {
      return this.http.get<Product[]>(`${environment.baseUrl}/products`, {
        params: { categories_like: tab }
      });
    }

}