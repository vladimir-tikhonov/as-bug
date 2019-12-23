let uninitializedArray: i32[]|null = null;
const initializedArray: i32[] = [];

export function willNotFail(): void {
    uninitializedArray = [];
    uninitializedArray.push( 1 );
}

export function willFail(): void {
    initializedArray.push( 1 );
}