"use strict";
const Node = require('./node');

class LinkedList {
    constructor() {
		this.length=0
	}

    append(data) {
			const newN=new Node();
			newN.data=data;
			newN.prev=null;
			newN.next=null;
		if(this.length==0)	{
			this._head=newN;
			this._tail=newN;
		}
		else if(this._head!=this._tail){
			newN.prev=this._tail;
			this._tail.next=newN;
			this._tail=newN;
		}
		else{
			this._head.next = newN;
			newN.prev = this._head;
			this._tail = newN;
		}
		this.length++;
	}

    head() {
		return this._head.data;
	}

    tail() {
		return this._tail.data;
	}

    at(index) {
		if(index==0)	return this._head.data;
		else{
			var temp=new Node();
			temp=this._head;
			while(index>0)	{
				temp=temp.next;
				index--;
			}	
			return temp.data;	
		}
	}

    insertAt(index, data) {}

    isEmpty() {}

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
