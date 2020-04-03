$(document).ready(function() {

// For reminder logged history
    var history_column_def = [
        {
            data: "logged_at",
            title: "Date",
        },
        {
            data: "company_name",
            title: "Company Name"
        },
        {
            data: "phone",
            title: "Phone"
        },
        {
            data: "sms_template",
            title: "SMS Template"
        },
        {
            data: "sms_status",
            title: "SMS Status"
        },
        {
            data: "scheduled_sms",
            title: "Scheduled SMS"
        },
        {
            data: "voice_template",
            title: "Voice Template"
        },
        {
            data: "voice_status",
            title: "Voice Status"
        },
        {
            data: "scheduled_voice",
            title: "Scheduled Voice"
        }
    ];

    var history_table;

    history_table = $('#history_table').DataTable({
        "sPaginationType": "full_numbers",
        ajax: {
            url: "/reminderHistory",
            dataSrc: ""

            // our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
        },
        columns: history_column_def,
        dom: 'Bfrtip', // Needs button container
        select: 'single',
        responsive: true,
        buttons: [],
        altEditor: false
    });





// For already scheduled reminders


    var reminder_column_def = [
        {
            data: "company_name",
            title: "Company Name"
        },
        {
            data: "phone",
            title: "Phone"
        },
        {
            data: "sms_template",
            title: "SMS Template"
        },
        {
            data: "scheduled_sms",
            title: "Scheduled SMS"
        },
        {
            data: "voice_template",
            title: "Voice Template"
        },
        {
            data: "scheduled_voice",
            title: "Scheduled Voice"
        }
    ];

    var reminder_table;

    reminder_table = $('#reminders_table').DataTable({
        "sPaginationType": "full_numbers",
        ajax: {
            url: "/getReminders",
            dataSrc: ""

            // our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
        },
        columns: reminder_column_def,
        dom: 'Bfrtip', // Needs button container
        select: 'single',
        responsive: true,
        buttons: [],
        altEditor: false
    });







// For schedule reminder customers view

    var customer_column_def = [
        {
            data: "date_added",
            title: "Date Added",
        },
        {
            data: "company_name",
            title: "Company Name"
        },
        {
            data: "phone",
            title: "Phone"
        },
        {
            data: "email",
            title: "Email"
        }
    ];

    var customer_table;

    history_table = $('#schedule_reminder_table').DataTable({
        "sPaginationType": "full_numbers",
        ajax: {
            url: "/getCustomers",
            dataSrc: ""

            // our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
        },
        columns: customer_column_def,
        dom: 'Bfrtip', // Needs button container
        select: 'single',
        responsive: true,
        buttons: [],
        altEditor: false
    });

//    var templates = {};
//    $('#loaderDiv').hide();
//
//    $.ajax({
//        url: "/email_templates",
//        type: 'GET',
//        success: function(data) {
//            templates = data;
//        },
//        error: function(error) {
//            alert(error);
//        }
//    });
//
//    $("#copy_it").click(function(){
//  	    generateCompare(last_ed);
//    });
//
//    var columnDefs = [{
//            data: "email",
//            title: "Email",
//            type: "readonly"
//        },
//        {
//            data: "owner_name",
//            title: "Owner Name"
//        },
//        {
//            data: "company_name",
//            title: "Company Name"
//        },
//        {
//            data: "state",
//            title: "State"
//        },
//        {
//            data: "imported_at",
//            title: "imported_at"
//        },
//        {
//            title: "Email Format",
//            render: function(data, type, row, meta) {
//                var $select = $("<select id='templates'></select>", {});
//                $.each(templates, function(k, v) {
//
//                    var $option = $("<option></option>", {
//                        "text": v.split("/").pop(),
//                        "value": v
//                    });
//                    if (data === v) {
//                        $option.attr("selected", "selected")
//                    }
//                    $select.append($option);
//                });
//                return $select.prop("outerHTML");
//            }
//        },
//        {
//            "data": null,
//            type: "readonly",
//            "defaultContent": "<button id='generate'>Generate</button>"
//        },
//        {
//            "data": null,
//            type: "readonly",
//            "defaultContent": "<button id='done'>Done</button>"
//        }
//    ];
//
//    var myTable;
//
//
//    myTable = $('#example').DataTable({
//        "sPaginationType": "full_numbers",
//        ajax: {
//            url: "/load_emails",
//            dataSrc: ""
//
//            // our data is an array of objects, in the root node instead of /data node, so we need 'dataSrc' parameter
//        },
//        columns: columnDefs,
//        dom: 'Bfrtip', // Needs button container
//        select: 'single',
//        responsive: true,
//        altEditor: true, // Enable altEditor
//        buttons: [{
//                extend: 'selected', // Bind to Selected row
//                text: 'Edit',
//                name: 'edit' // do not change name
//            },
//            {
//                text: 'Refresh',
//                name: 'refresh' // do not change name
//            },
//            {
//                text: 'Fetch Emails',
//                action: function(e, dt, node, config) {
//                    $.ajax({
//                        url: "/get_emails",
//                        type: 'GET',
//                        beforeSend: function() {
//                            $("#loaderDiv").show();
//                         },
//                        success: function(data) {
//                            $("#loaderDiv").hide();
//                            alert(data);
//                        },
//                        error: function(error) {
//                            $("#loaderDiv").hide();
//                            alert(error);
//                        },
//                        complete: function(){
//                            $('#loaderDiv').hide();
//                        }
//                    });
//                }
//            }
//        ],
//        onEditRow: function(datatable, rowdata, success, error) {
//
//
//            $.ajax({
//                url: "/update_details?owner_name="+rowdata['owner_name']+"&company_name="+rowdata['company_name']+"&state="+rowdata['state']+"&email="+rowdata['email'],
//                type: 'GET',
//                data: rowdata,
//                success: function(data){
//                    alert(data);
//                },
//                error: function(error){
//                    alert(error);
//                }
//            });
//        }
//    });
//
//    $('#example tbody').on('click', 'button', function() {
//        var data = myTable.row($(this).parents('tr')).data();
//        if (this.id === 'generate') {
//            var selected_template = $(this).parents('tr').find('#templates').val();
//            $.ajax({
//                url: "/render_template?email=" + data['email']+"&owner_name=" + data['owner_name']+"&company_name="+data['company_name']+"&state="+data['state']+"&location="+selected_template,
//                type: 'GET',
//                success: function(data) {
//                    //data.tex.select();
//                    //document.execCommand("copy");
//                    //alert(data + '\n\n' + 'Email copied to clipboard !');
//                    console.log(data);
//                    $('#email_body').empty();
//                    $('#myModal').modal('show');
//	  	            $("#email_body").html(data);
//                },
//                error: function(error) {
//                    alert(error);
//                }
//            });
//        } else if (this.id === 'done') {
//            $.ajax({
//                url: "/update_status?email=" + data['email'],
//                type: 'GET',
//                success: function(data) {
//                    alert(data);
//                },
//                error: function(error) {
//                    alert(error);
//                }
//            });
//        }
//    });

});