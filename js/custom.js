/**
 * Created by Admin on 12.07.2017.
 */
$(document).ready(function () {
    $('#from').datepicker({
        autoclose: true
    });

    $('#from').on('show', function(e){
        console.debug('show', e.date, $(this).data('stickyDate'));

        if ( e.date ) {
            $(this).data('stickyDate', e.date);
        }
        else {
            $(this).data('stickyDate', null);
        }
    });

    $('#from').on('hide', function(e){
        console.debug('hide', e.date, $(this).data('stickyDate'));
        var stickyDate = $(this).data('stickyDate');

        if ( !e.date && stickyDate ) {
            console.debug('restore stickyDate', stickyDate);
            $(this).datepicker('setDate', stickyDate);
            $(this).data('stickyDate', null);
        }
    });


    $('#to').datepicker({
        autoclose: true
    });

    $('#to').on('show', function(e){
        console.debug('show', e.date, $(this).data('stickyDate'));

        if ( e.date ) {
            $(this).data('stickyDate', e.date);
        }
        else {
            $(this).data('stickyDate', null);
        }
    });

    $('#to').on('hide', function(e){
        console.debug('hide', e.date, $(this).data('stickyDate'));
        var stickyDate = $(this).data('stickyDate');

        if ( !e.date && stickyDate ) {
            console.debug('restore stickyDate', stickyDate);
            $(this).datepicker('setDate', stickyDate);
            $(this).data('stickyDate', null);
        }
    });
});
