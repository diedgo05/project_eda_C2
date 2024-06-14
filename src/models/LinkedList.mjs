import Lugar from "../models/Lugar.mjs";
import Node from "./Node.mjs";

export default class linkedList {
    #head
    #count

    constructor(){
        this.#head = null
        this.#count = 0
    }

    push (name,weight) {
        let lugarr = new Lugar(name, weight)
        const node = new Node (lugarr)

        if (this.#head == null) 
            this.#head = node
            else {
                let current = this.#head
                while (current.next != null) {
                    current = current.next
                    current.next = node
                }
            }
            this.#count++
    }

    getElementAt (index) {
         this.#count = 0
        let current = this.#head
        while (current) {
            if (this.#count === index) {
                return current;
            }
            this.#count++
            current = current.next;
        }
        return null
}

    Empty(){
    return (this.#head == null )  ? true : false
     }
     
    size(){
        return this.#count
    }

    recorrido(callback) {
        if (this.#head == null) {
            console.log ('The linked list is empty')
        }   else {
            let node = this.#head
            while (node != null) {
                callback(node)
                node = node.next
            }
        }
    }
    getHead(){
        return this.#head
    }
}