
export default class PerfumeStore {
    rootStore;
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    func = ()=>{
        this.rootStore.perfumeStore
    }
}
