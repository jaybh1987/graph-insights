
//adjacency list as a hashmap

// const graph = {
//   a: ['a', 'b'],
//   b: ['c'],
//   c: ['d'],
//   d: ['b', 'c']
// }

//required operation a graph needs is
// add and remove vertices
// add and remove edges

class Node {

  constructor(value) {
    this.value = value
    this.adjacents = []
  }

  addAdjacent(node) {
    this.adjacents.push(node)
  }

  removeAdjacent(node) {
    //let a = ['a','b','c', 'd', 'e', 'f', 'g', 'h', 'i']
    const index = this.adjacents.indexOf(node)
    if(index > -1) {
      this.adjacents.splice(index,1)
    }
    return node
  }

  getAdjacents() {
    return this.adjacents
  }

  isAdjacent(node) {
    return this.adjacents.indexOf(node) > -1
  }

}

class Graph {

  constructor(edgeDirection = Graph.DIRECTED) {
    this.nodes = new Map()
    this.edgeDirection = edgeDirection
  }

  addEdge(source, destination) {

    const sourceNode = this.addVertex(source)
    const destinationNode = this.addVertex(destination)

    sourceNode.addAdjacent(destination)

    if(this.edgeDirection === Graph.UNDIRECTED) {
      destination.addAdjacent(source)
    }

    return [sourceNode, destinationNode]
  }

  addVertex(value) {
    if(this.nodes.has(value)) {
      return this.nodes.get(value)
    } else {

      const vertex = new Node(value)
      this.nodes.set(value, vertex)
      return vertex
    }
  }

  removeVertex(value) {
    const current = this.nodes.get(value)
    console.log('current = '+ current)
    if(current) {
      for(const node of this.nodes.values()) {
        node.removeAdjacent(current)
      }
    }

    return this.nodes.delete(value)
  }

  removeEdge(source, destination) {

    const sourceNode = this.nodes.get(source)
    const destinationNode = this.nodes.get(destination)

    if(sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destination)

      if(this.edgeDirection == Graph.UNDIRECTED) {
        destinationNode.removeAdjacent(source)
      }
    }
  }



}

Graph.UNDIRECTED = Symbol('undirected graph')
Graph.DIRECTED = Symbol('directed graph')





class Queue {
    constructor(){
        this.items = {}
        this.frontIndex = 0
        this.backIndex = 0
    }

    enqueue(item) {
        this.items[this.backIndex] = item
        this.backIndex++
        return item + ' inserted'
    }

    dequeue() {
        const item = this.items[this.frontIndex]
        delete this.items[this.frontIndex]
        this.frontIndex++
        return item
    }

    peek(){
        return this.items[this.frontIndex]
    }

    get printQueue() {
        return this.items
    }

    isEmpty() {
        return Object.keys(this.items).length == 0
    }
}



function* bfs(first) {

    const visited = new Map()
    const visitList = new Queue()

    visitList.enqueue(first)

    while(!visitList.isEmpty) {
        const node = visitList.dequeue()

        if(node && !visited.has(node)) {
            yield node;
            visited.set(node)
            node.getAdjacents().forEach( adj => visitList.enqueue(adj))
        }
    }

}



