import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  saveLink(link: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      chrome.storage.local.set({ 'savedLink': link }, () => {
        if (chrome.runtime.lastError) {
          reject(chrome.runtime.lastError);
        } else {
          resolve();
        }
      });
    });
  }

  getSavedLink(): Promise<string | null> {
    return new Promise<string | null>((resolve) => {
      chrome.storage.local.get(['savedLink'], (result) => {
        resolve(result['savedLink'] || null);
      });
    });
  }
}
