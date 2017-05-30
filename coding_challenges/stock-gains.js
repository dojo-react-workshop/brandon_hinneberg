//APPL 
Const applicationCache

function maxProfit(arr) {
    var buyIndex = 0;
    var sellIndex = 1;
    var maxProfit = arr[sellIndex] - arr[buyIndex];

    for (let i = 0; i < arr.length; i++) {
        for (let x = i + 1; x < arr.length; x++) {
            if ((arr[x] - arr[i]) > maxProfit) {
                buyIndex = i;
                sellIndex = x;
                maxProfit = arr[x] - arr[i];
            }
        }
    }
    return () // Not done completely 
}