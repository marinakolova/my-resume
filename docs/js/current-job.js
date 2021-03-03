(function ($) {
    // Returns the month
    let getMonthByName = function getMonthByName(monthName) {
        let months = {
            "Jan": 0,
            "Feb": 1,
            "Mar": 2,
            "Apr": 3,
            "May": 4,
            "Jun": 5,
            "Jul": 6,
            "Aug": 7,
            "Sep": 8,
            "Oct": 9,
            "Nov": 10,
            "Dec": 11
        };
        return months[monthName];
    };

    // Returns the months difference
    // between two dates
    function monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }

    // Converts the number of total months
    // to a human-readable format
    // e.g. 16 months => 1 yr 4 mos
    function getBeautifiedTotal(totalMonths) {
        let result = '',
            years = parseInt(totalMonths / 12),
            months = parseInt(totalMonths % 12);

        if (years != 0) {
            if (years === 1) {
                result += years + " yr ";
            } else {
                result += years + " yrs ";
            }
        }
        if (months != 0) {
            if (months === 1) {
                result += months + " mo";
            } else {
                result += months + " mos";
            }
        }        
        return result;
    }

    // Dyamically calculates current position total time
    // and current company total time
    (function calcTotalExperience() {
        let currentPositionStartDate = $("#currentPosStartDate").text(),
            currentCompanyStartDate = $("#currentCompanyStartDate").text(),
            currentPositionParts = currentPositionStartDate.split(' '),
            currentCompanyParts = currentCompanyStartDate.split(' ');

        let currentPosStartMonth = getMonthByName(currentPositionParts[0]),
            currentPosStartYear = currentPositionParts[1],
            currentCompanyStartMonth = getMonthByName(currentCompanyParts[0]),
            currentCompanyStartYear = currentCompanyParts[1];


        let curPosStartDate = new Date(currentPosStartYear, currentPosStartMonth, 1, 0, 0, 0),
            curCompStartDate = new Date(currentCompanyStartYear, currentCompanyStartMonth, 1, 0, 0, 0);

        let curPosMonths = monthDiff(curPosStartDate, new Date()) + 1,
            curCompMonths = monthDiff(curCompStartDate, new Date()) + 1;

        let curPosTotal = getBeautifiedTotal(curPosMonths),
            curCompTotal = getBeautifiedTotal(curCompMonths);

        $("#currentPosTotal").text(curPosTotal);
        $("#currentCompanyTotal").text(curCompTotal);
    })();

})(jQuery);
