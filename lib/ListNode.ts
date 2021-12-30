export class ListNode {
	val: number
	next: ListNode | null
	flag: boolean
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val);
		this.next = (next === undefined ? null : next);
		this.flag = false;
	}
}
