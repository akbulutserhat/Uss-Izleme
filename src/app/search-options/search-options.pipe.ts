import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchOptions'
})
export class SearchOptionsPipe implements PipeTransform {

  transform(items: any[], searchText: string): any {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {

      if(it.adi) {
        return it.adi.toLocaleLowerCase().includes(searchText);
      }
      if(it.HASTANE_ADI) {
        return it.HASTANE_ADI.toLocaleLowerCase().includes(searchText) || 
                it.SERVIS_BILGILERI.some(s => s.ADI.toLocaleLowerCase().includes(searchText)) ||
                it.SERVIS_BILGILERI.some(
                  s => Object.keys(s.HATA_BILGILERI).
                  some(h => h.toLocaleLowerCase().includes(searchText))) || 
                it.SERVIS_BILGILERI.some(
                  s => Object.values(s.HATA_BILGILERI).some(
                    (v:any) => v.ACIKLAMA.toLocaleLowerCase().includes(searchText)
                  ))

      }

      if(it.ADI) {
        return  it.ADI.toLocaleLowerCase().includes(searchText) ||
                 Object.keys(it.HATA_BILGILERI).
                  some(h => h.toLocaleLowerCase().includes(searchText)) || 
                   Object.values(it.HATA_BILGILERI).some(
                    (v:any) => v.ACIKLAMA.toLocaleLowerCase().includes(searchText))

      }
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
