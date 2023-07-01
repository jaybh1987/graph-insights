


let g = new Graph()
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d')


g.addEdge('a', 'b')
g.addEdge('a', 'a')
g.addEdge('b', 'c')
g.addEdge('c', 'd')
g.addEdge('d', 'b')



let q = new Queue()

q.enqueue(8)
q.enqueue(99)
q.enqueue(33)
q.enqueue(55)
q.enqueue(66)
q.enqueue(88)



function* foo(index) {

    while(index < 2) {
        console.log('Statement before yield')
        yield index
        console.log('Statement after yield')
        console.log('Before increment')
        index++
        console.log('after increment')
    }
}