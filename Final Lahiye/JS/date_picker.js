$(document).ready(function () {
  

    if (scrollY > 100) {
        $("header #const").css("background-color", "black");
        $(".navbar-brand").attr("style", "color: black !important");
        $(".navbar-nav .nav-link ").attr("style", "color: black !important");
    } else {
        $("header #const").css("background-color", "");
        $(".navbar-brand").attr("style", "");
        $(".navbar-nav .nav-link ").attr("style", "");
    }

    $(window).scroll(function () {
        if (scrollY > 100) {
            $("#const").addClass("tes")
            $("header #const").css("background-color", "white");
            $(".navbar-brand").attr("style", "color: black !important");
            $(".navbar-nav .nav-link ").attr("style", "color: black !important");
        } else {
            $("#const").removeClass("tes");
            $("#const").addClass("tes1")
            $("header #const").css("background-color", "");
            $(".navbar-brand").attr("style", "");
            $(".navbar-nav .nav-link ").attr("style", "");
        }
    })
    $(".up").click(function () {
        $(window).scrollTop(0);
    })




    $(document).on("click", ".action_darkoutline", function () {
        $(".color6").parent().css({
            "background-color": "black",
            "border": "1px solid black",
            "color": "white"

        })
    });

    var fortabs = $(".fortab");

    fortabs.click(function () {
        for (let i = 0; i < fortabs.length; i++) {

            $(".activenav").removeClass("activenav");
            $(this).addClass("activenav");


        }

    })

    //data picker calendar
//input left1
    $(function() {
        $('input[name="birthday"]').daterangepicker({
          singleDatePicker: true,
          showDropdowns: true,
          minYear: 1901,
          maxYear: parseInt(moment().format('YYYY'),10)
        }, function(start, end, label) {
          var years = moment().diff(start, 'years');
          alert("You are " + years + " years old!");
        });
      });
      //input right2
      $(function() {

        var start = moment().subtract(29, 'days');
        var end = moment();
    
        function cb(start, end) {
            $('#reportrange span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
        }
    
        $('#reportrange').daterangepicker({
            startDate: start,
            endDate: end,
            ranges: {
               'Today': [moment(), moment()],
               'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
               'Last 7 Days': [moment().subtract(6, 'days'), moment()],
               'Last 30 Days': [moment().subtract(29, 'days'), moment()],
               'This Month': [moment().startOf('month'), moment().endOf('month')],
               'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        }, cb);
    
        cb(start, end);
    
//input left2
$(function() {
    $('input[name="datetimes"]').daterangepicker({
      timePicker: true,
      startDate: moment().startOf('hour'),
      endDate: moment().startOf('hour').add(32, 'hour'),
      locale: {
        format: 'M/DD hh:mm A'
      }
    });
  });
});



//input right2
$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'left'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });



    });
