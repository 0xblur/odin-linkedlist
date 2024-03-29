class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(value) {
		if (this.head === null) {
			this.prepend(value);
		} else {
			const node = new Node(value);
			//Append node to previous tail
			this.tail.next = node;
			//Set node as current tail
			this.tail = node;
			this.size++;
		}
	}

	prepend(value) {
		const node = new Node(value, this.head);
		this.head = node;
		if (this.tail === null) {
			this.tail = node;
		}
		this.size++;
	}

	at(index) {
		let current = this.head;
		for (let i = 1; i <= index; i++) {
			current = current.next;
		}
		return current;
	}

	removeAt(index) {
		if (index === 0) {
			this.head = this.head.next;
			this.size--;
		} else {
			let current = this.head;
			let previous;
			for (let i = 1; i <= index; i++) {
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
			if (current.next === null) this.tail = previous;
			this.size--;
		}
	}

	insertAt(value, index) {
		if (index >= this.size) {
			this.append(value);
			return;
		}

		if (index <= 0) {
			this.prepend(value);
			return;
		}

		const node = new Node(value);
		let current = this.head;
		let previous;
		for (let i = 1; i <= index; i++) {
			previous = current;
			current = current.next;
		}
		if (current === null) {
			this.append(value);
		} else {
			previous.next = node;
			node.next = current;
			this.size++;
		}
	}

	pop() {
		let current = this.head;
		while (current !== null) {
			if (current.next.next === null) {
				current.next = null;
				this.tail = current;
				break;
			}
			current = current.next;
		}
		this.size--;
	}

	contains(value) {
		let current = this.head;
		while (current !== null) {
			if (current.value === value) {
				return true;
			}
			current = current.next;
		}
		return false;
	}

	find(value) {
		let current = this.head;
		let counter = 0;
		while (current !== null) {
			if (current.value === value) {
				return counter;
			}
			current = current.next;
			counter++;
		}
		return null;
	}
	toString() {
		let current = this.head;
		const arr = [];
		while (current !== null) {
			const str = `(${current.value}) -> `;
			arr.push(str);
			current = current.next;
		}
		arr.push("null");
		console.log(...arr);
	}
}

class Node {
	constructor(value = null, next = null) {
		this.value = value;
		this.next = next;
	}
}
