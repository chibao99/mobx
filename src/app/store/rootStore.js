import { createContext } from 'react';
import {} from 'mobx';
import routeStore from './routeStore';
import perfumeStore from './perfumeStore';
export class RootStore {
    routeStore;
    perfumeStore;
    contructor() {
        this.routeStore = new routeStore(this);
        this.perfumeStore = new perfumeStore(this);
    }
}

export default createContext(new RootStore());
