import { Parent } from './parent';
import { childPool } from './pool';

@unmanaged
export class Child extends Parent {
    public constructor() {
        super();
    }
}