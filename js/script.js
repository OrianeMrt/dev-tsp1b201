$(document).ready( function () {
    $('#gestion').DataTable({
        "ajax": "data.php",
        "columnDefs": [ {
            "targets": -1,
            "data": null,
            "render": function ( data, type, row, meta ) {
                return '<a href="https://www.commune-rosieres10.fr/Recherche?id_article='+data[data.length -1]+'">'+data[data.length -1]+'</a>';
              }
        }, {
            targets : 0,
            visible : false
        } ],
        searchPanes: {
            panes: [
                {
                    header:'Custom',
                }
            ],
            layout: 'columns-4',
        },
        dom: 'Pfrtip',
    });
} );