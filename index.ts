import * as readline from 'node:readline/promises'; 
import {stdin as input, stdout as output} from 'node:process';

function sapa(nama: string, umur: number): string{
    return `Halo ${nama}, umur kamu ${umur} tahun.`;
}

async function main(){
    const rl = readline.createInterface({ input, output});

    const nama = await rl.question('Masukan nama Anda: ');
    const umurStr = await rl.question('Masukan Umur Anda: ');

    //konversi string input ke number 
    const umur =parseInt(umurStr, 10);

    if (isNaN(umur)) {
        console.log('X umur harus berupa angka!');
    } else {
        const pesan = sapa (nama, umur);
        console.log('V', pesan);
    }

    rl.close(); 
}

main();