var newSurname = document.getElementById('new-surname');
var surnameList = document.getElementById('surname-list');
var btnAdd = document.getElementById('btnAdd');
var list = ['Bianchi', 'Rossi', 'Dunzioni', 'Balsano', 'Verdi'];

//  inserimento nuovo todo



btnAdd.addEventListener('click',
    function() {
        if (newSurname.value == '') {
            alert('Devi rimpire il campo')
        } else {
            //  prendere valore utente, inserire nell array
            list.push(newSurname.value);
            list.sort();

            // costruire elementi lista
            var items = '';
            for (var i = 0; i < list.length; i++) {
                items += '<li>' + list[i] + '</li>';
            }

            surnameList.innerHTML = items;
            newSurname.value = '';

        }
    }
)