import { Injectable } from '@angular/core';

export interface TestItem {
  name: string;
  createdAt?: Date;
  participantsCount?: number;
  passedAt?: Date;
  result?: string;
}

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  testsList: TestItem[] = [
    {
      name: 'Тест 1',
      createdAt: new Date(2021, 5, 3), // 03.06.2021
      participantsCount: 5,
      passedAt: new Date(2021, 5, 3), // 03.06.2021
      result: '35/40',
    },
    {
      name: 'Тест 2',
      createdAt: new Date(2021, 5, 3),
      participantsCount: 5,
      passedAt: new Date(2021, 5, 3), // 03.06.2021
      result: '35/40',
    },
    {
      name: 'Тест 3',
      createdAt: new Date(2021, 5, 3),
      participantsCount: 5,
      passedAt: new Date(2021, 5, 3), // 03.06.2021
      result: '35/40',
    },
    {
      name: 'Тест 4',
      createdAt: new Date(2021, 5, 3),
      participantsCount: 5,
      passedAt: new Date(2021, 5, 3), // 03.06.2021
      result: '35/40',
    },
  ];
}
