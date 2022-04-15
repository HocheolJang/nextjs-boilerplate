import { makeAutoObservable } from 'mobx';
import { DefaultStoreType } from 'srcs/types';

const DefaultStore: DefaultStoreType = makeAutoObservable({
  number: 10,

  increaseNumber() {
    DefaultStore.number++;
  },

  decreaseNumber() {
    DefaultStore.number--;
  },
});

export { DefaultStore };
