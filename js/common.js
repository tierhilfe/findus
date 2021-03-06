
/**
 *  Util class to provide "static" method commonly used.
 * @type type
 */
FindusUtil = {
    /**
     * Block the UI with a nice animated gif and a custom message. If no message
     * is set, a default message is used.
     * @param {type} message
     * @returns {undefined}
     */
    blockUI:  function (message) {
        if(!message){
            message = "Bitte warten...";
        }
        $.blockUI({
            baseZ: 2000,
            message: '<h1 class="loading"><img src="./images/animal.gif" /> '+message+'</h1>'
        });
    },
    /**
     * Upgrade a html table denoted by its jquery selector into a datatables table.
     * 
     * @param {type} selector
     * @param {type} options
     * @returns {unresolved}
     */
    initTable: function (selector, options) {
        var table = $(selector);
        var coreOptions = {
            language: {
                url: './js/german.json'
            }//,
    //        sScrollY: "200px"
    //        fnDrawCallback: function() {
    //        table.dataTable()._fnScrollDraw();        
    //        table.closest(".dataTables_scrollBody").height(200);
    //   }
        };
        if (options) {
            coreOptions = $.extend(coreOptions, options);
        }

        var dataTable = table.DataTable(coreOptions);
        return dataTable;
    },
    /**
     * Handy function to display a nice looking error dialog to the user.
     * This dialog is blocking.
     * 
     * @param {type} title
     * @param {type} message
     * @returns {undefined}
     */
    showErrorDialog: function (title, message) {
        $("<div>" + message + "</div>").dialog({
            "modal": true,
            "title": title
        });
    }
};

//unblock by default if an ajax call comes to an end.
$(document).ajaxStop($.unblockUI);

$(document).ready(function(){
    FindusUtil.initTable("table.default");
    $(".tabs").tabs();
    $(document ).tooltip({
      position: {
        my: "center bottom-20",
        at: "center top",
        using: function( position, feedback ) {
          $( this ).css( position );
          $( "<div>" )
            .addClass( "arrow" )
            .addClass( feedback.vertical )
            .addClass( feedback.horizontal )
            .appendTo( this );
        }
      }
    });
});