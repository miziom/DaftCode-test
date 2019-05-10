function search() {
    var textField, filter, myTable, tr, td, i, txtValue;
    textField = document.getElementsByClassName("textField")[0];
    filter = textField.value.toUpperCase();
    myTable = document.getElementsByClassName("searchTable")[0];
    tr = myTable.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function enterPressed() {
    if (event.keyCode == 13) {
        event.preventDefault();
        search();
    }
}

function buttonClicked() {
    search();
}