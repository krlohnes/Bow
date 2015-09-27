$(document).ready(function()
{

   $('#field').click(function(e){ $(this).focus(); });

        $('#button').click(function(e)
        {
            $('#field').trigger('click');
        })
})             