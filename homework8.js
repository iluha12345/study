function getPeople(handshake) {
    let persons = 1;
    handshake = 0;
    while(handshake!=120)
    {
        persons+=1;
        handshake+=(persons-1);
    }
}
console.log( getPeople(120) ); // ?
