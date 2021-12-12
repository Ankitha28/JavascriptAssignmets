// program to sort array by property name
function ID(x, y) {

    return x.libraryID - y.libraryID;
}

var library = [ 
    {
        title:  'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 100
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 78
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 1
    }
];

console.log(library.sort(ID));