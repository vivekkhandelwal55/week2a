export default function arrayRemove(arr, value) {

    return arr.filter(function (geeks) {
        return geeks !== value;
    })
}