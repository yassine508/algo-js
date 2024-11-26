function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let a = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > a) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = a;
    }
    return arr;
}




