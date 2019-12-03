function initSidenav() {
    document.addEventListener('DOMContentLoaded', function() {
        let elems = document.querySelectorAll('.sidenav');
        let instances = M.Sidenav.init(elems);
    });
}

function initFlowtext() {
    let nodes = Array.from(document.getElementsByTagName('p'));
    nodes.map(e => e.classList.add('flow-text'));
}

initSidenav();
initFlowtext();