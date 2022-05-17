var teacher1 = {
    id: 2,
    name: "Ans",
    noOfStudents: 100,
    subject: {
        Chemistry: false,
        Math: true,
        Physics: true
    }
};
var user1 = {
    id: 1,
    age: 12,
    name: "abc",
    salary: 1200
};
var user2 = {
    id: 1, 
    age: 10, 
    name: "def", 
    salary: 1000
};
var user3 = {
    id: 1, 
    age: 20, 
    name: "ghi", 
    salary: 2000
};
var arr = [user1, user2, user3];
function sort(arr, q) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            if (arr[i][q] > arr[j][q]) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var ans = sort(arr, "id");
console.log(ans);
