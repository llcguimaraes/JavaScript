function countDuplicate(numbers) {
    // Write your code here
    
    var atual = null;
    
    var contador = 0;
    
    for (var i = 0; i < numbers.lenght; i++){
        if (numbers[i] != atual) {
            console.log(atual);
            atual = numbers[i];
            contador = 1;
        } else {
            contador++;
        }
    }
    
    return contador;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const numbersCount = parseInt(readLine().trim(), 10);

    let numbers = [];

    for (let i = 0; i < numbersCount; i++) {
        const numbersItem = parseInt(readLine().trim(), 10);
        numbers.push(numbersItem);
    }

    const result = countDuplicate(numbers);

    ws.write(result + '\n');

    ws.end();
}
