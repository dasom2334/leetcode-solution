function isOneBitCharacter(bits: number[]): boolean {
    let one = 0;
    for (let i = bits.length - 2; i >= 0; i--) {    
        if (bits[i] === 1) {
            one += 1;
        } else {
            break;
        }

    }
    return one % 2 !== 1;
};