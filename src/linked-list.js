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
		if(this._head==null)	return null;
		return this._head.data;
	}

    tail() {
		if(this._head==null)	return null;
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

    insertAt(index, data) {
		const newN=new Node();
		newN.data=data;
		newN.prev=null;
		newN.next=null;
		
		if(index==0)	{
			newN.next=this._head;
			this._head.prev=newN;
			this._head=newN;
		}
		
		else{
			var temp=new Node();
			temp=this._head;
			while(index>0)	{
				temp=temp.next;
				index--;
			}
			newN.prev=temp.prev;
			temp.prev.next=newN;
			newN.next=temp;
			temp.prev=newN;
		}
		
		this.length++;
	}

    isEmpty() {
		if(this.length==0)	return true;
		else return false;
	}

    clear() {
		this._head=null;
		this._tail=null;
		this.length=0;
	}

    deleteAt(index) {
		if(index==0)	{
			this._head=this._head.next;
		}
		else{
			var temp=new Node();
			temp=this._head;
			while(index>0)	{
				temp=temp.next;
				index--;
			}
			temp.prev.next=temp.next;
			temp.next.prev=temp.prev;
		}
	}

    reverse() {
		
		if(this._head==this._tail)	return;
		
		var temp=new Node();
		temp=this._head;
		var test=new Node();
		test=this._tail.prev;
		
		var first=1;
		
		while(temp!=this._head||first==1)	{
			if(first==1)    {
				first=0;
				this._tail.next=test;
				this._tail.prev=null;
				temp=test.prev;
				test.prev=this._tail;
			}
			
			else{
				test.next=temp;
				temp=temp.prev;
				test.next.prev=test;
				test=test.next;
			}	
		}
		test.next=this._head;
		this._head.prev=test;
		this._head.next=null;
		test=this._tail;
		this._tail=this._head;
		this._head=test;
		
	}

    indexOf(data) {
		var count=0;
		var temp=new Node();
		temp=this._head;
		while(temp!=null)	{
			if(temp.data==data)	{
				return count;
			}	
			count++;
			temp=temp.next;
		}
		return -1;
	}
}

module.exports = LinkedList;
