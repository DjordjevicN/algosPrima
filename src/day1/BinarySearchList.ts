export default function bs_list(
    haystack: number[],
    trazeniBroj: number,
): boolean {
    let pocetak = 0;
    let kraj = haystack.length;
    do {
        const sredina = Math.floor((pocetak + kraj) / 2);
        const vrednost = haystack[sredina];
        if (vrednost === trazeniBroj) {
            return true;
        } else if (vrednost > trazeniBroj) {
            kraj = sredina;
        } else {
            pocetak = sredina + 1;
        }
    } while (pocetak < kraj);
    return false;
}
