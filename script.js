$(document).ready(function() {
    var elementsTable = $(".myTable"),
        pos_h = 183, // смещение по высоте
        pos_l = 132, // смещение слева
        btnAdd = $("#buttonAdd"), //кнопка добавление строки
        btnSave = $("#saveInput"); // кнопка сохранения
        interactiveTable(elementsTable, btnSave, btnAdd, pos_h, pos_l);
    });

function interactiveTable(elementsTable, buttonSave, buttonAdd, pos_h, pos_l) {
    elementsTable.on("click", "td", showTextArea);
    buttonAdd.on("click", addLine);
    buttonSave.on("click", saveTextArea);

    function showTextArea() {
        $("#popup").css({"top":"0","left":"0"});
        var $this = $(elementsTable);
        var position = $(this).position();
        var width = $(this).width();
        var height = $(this).height();
        var top = position.top + (height / 2) - pos_h;
        var left = position.left + (width / 2) - pos_l;
        console.log(position, width, height, top, left);
        $(elementsTable).find(".selected").removeClass('selected');
        $(this).addClass('selected');
        $("#popup").offset({ top: top, left: left});
        $("#popup").show('400');
        $("#txtarea").focus();
        $("#txtarea").val(this.innerHTML);
    }

    function saveTextArea() {
        $(elementsTable).find(".selected").text($("#txtarea").val());
        $("#txtarea").val("");
        $("#popup").hide("400");
    }

    function addLine() {
        $(elementsTable).append('<tr><td>-</td><td>-</td><td>-</td><td>-</td><td>-</td></tr>');
    window.scrollBy(0, 50); // смещение скролла
    }
}






