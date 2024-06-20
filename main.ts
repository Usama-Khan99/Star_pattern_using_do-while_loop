// Star pattern using do while loop 

function printStarPattern(rows: number): void {
    let row = 1;
    
    do {
        let stars = '';
        let columns = 1;

        do {
            stars += '* ';
            columns++;
        } while (columns <= row);

        console.log(stars);
        row++;
    } while (row <= rows);
}

// Example usage: Print a star pattern with 5 rows
printStarPattern(5);
