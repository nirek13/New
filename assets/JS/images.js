// Disable image dragging and right click context menu
$('img').on('dragstart', function (event) { event.preventDefault(); });
$('img').bind('contextmenu', function (e) {
    return false;
});

