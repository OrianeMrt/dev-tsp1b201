$(document).ready( function () {
    $('#gestion').DataTable({
        "ajax": "data.php",
        "columnDefs": [ {
            targets: -1,
            data: null,
            render: function ( data ) {
                return '<a href="https://www.commune-rosieres10.fr/Recherche?id_article='+data[data.length -1]+'">'+data[data.length -1]+'</a>';
              }
        }, {
            targets : 0,
            visible : false
        },
        { 
            targets: 4,
            className: 'f32',
            render : function(data) {
                var country = '';
                switch (data) {
                    case 'Great Britain':
                        country = 'gb';
                        break;
                    case 'United States':
                        country = 'us';
                        break;
                    case 'France':
                        country = 'fr';
                        break;
                }
                if(country != null) {
                    return '<span class="flag ' + country + '"></span>';
                } else {
                    return data;
                }
            }],
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