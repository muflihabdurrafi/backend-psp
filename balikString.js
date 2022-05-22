/**
 * fungsi yang membalikkan kalimat/string
 * dilarang menggunakan method reverse()
 */

//DONE
function balikString(str) {
    string = str.split("");
    i = string.length;
    balik = "";
    for (i >= 0; i--; ) {
        balik += str[i];
    }
    return balik;
}
/**
 * contoh
 * balikString('halo dek')
 * ked olah
 */
console.log(balikString("hello world"));
console.log(balikString("bolak balik"));
console.log(balikString("evil o live"));
console.log(balikString("halo dek"));
