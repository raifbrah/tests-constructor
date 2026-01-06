import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  save<T>(itemName: string, items: T): void {
    localStorage.setItem(itemName, JSON.stringify(items));
  }

  load<T = unknown>(itemName: string): T | null {
    const storageItem = localStorage.getItem(itemName);
    return storageItem ? (JSON.parse(storageItem) as T) : null;
  }
}
