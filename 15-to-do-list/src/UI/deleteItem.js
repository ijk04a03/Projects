export default function deleteItem(arr, index) {

    let confirmDelete = confirm(
        `Delete "${arr[index].title}"?`
    );

    if (!confirmDelete) {
        return false;
    }

    arr.splice(index, 1);

    return true;
}