function swap(arr,a,b){
    const temp = arr[a]
    arr[a]=arr[b]
    arr[b]=temp
}

function bubbleSort(arr){
    for(let i=0;i<arr.length;i++)
        for(let j=0;j<arr.length-1;j++)
            if(arr[j]>arr[j+1])swap(arr,j,j+1)
}

function selectionSort(arr){

    for(let i=0;i<arr.length-1;i++){

        let min=i
        for(j=i+1;j<arr.length;j++)
            if(arr[j]<arr[min])
                min=j

        if(min!==i)swap(arr,i,min)
    }
}

function insertionSort(arr){

    for(let i=1;i<arr.length;i++){

        let current = arr[i]
        let j = i-1

        while(j>=0 && (arr[j]>current)){
            arr[j+1]=arr[j]
            j--
        }
        arr[j+1]=current
    }
}

const arr=[23,12,13,21,23,16,12,17]

console.log(new Set(arr))
// bubbleSort(arr)
// selectionSort(arr)
// insertionSort(arr)
console.log(arr)