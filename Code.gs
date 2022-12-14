function doGet(req) {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName('');
    var values = sheet.getDataRange().getValues();
    var output = [];
    for (var i = 1; i < values.length; i++) {
        var row = {};
        for (var j = 0; j < values[0].length; j++) {
            row[values[0][j]] = values[i][j];

        }
        output.push(row);
    }
    return ContentService.createTextOutput(JSON.stringify({
        data: output
    })).setMimeType(ContentService.MimeType.JSON);

}