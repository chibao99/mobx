import { runInAction } from 'mobx';
import RootStore from './rootStore';
export default class RouteStore {
    rootStore;

    constructor(RootStore) {
        this.rootStore = RootStore;
    }

    links = [];

    addLink = link => {
        runInAction(() => {
            this.links.push(link);
        });
    };

    removeLink = link => {
        runInAction(() => {
            const index = this.links.findIndex(x => x.name === link.name);
            this.links.splice(index, 1);
        });
    };
}
