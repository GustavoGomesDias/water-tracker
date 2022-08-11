export namespace backend {
	
	export class Tracker {
	    defaultQuantity: string;
	    actualQuantity: string;
	    alertTime: string;
	
	    static createFrom(source: any = {}) {
	        return new Tracker(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.defaultQuantity = source["defaultQuantity"];
	        this.actualQuantity = source["actualQuantity"];
	        this.alertTime = source["alertTime"];
	    }
	}

}

