var button = document.createElement('button');
var btnText = document.createTextNode('Add Square');
var parentDiv = document.createElement('div');

button.appendChild(btnText);
document.body.appendChild(button);
document.body.appendChild(parentDiv);

var colors = ['red', 'blue', 'orange', 'green', 'teal', 'violet', 'purple', 'crimson', 'skyblue', 'salmon']

button.addEventListener('click', function() {
    var div = document.createElement('div');
    parentDiv.appendChild(div);
    div.className = 'box';
    var existingDiv = document.getElementsByClassName('box').length;
    div.id= existingDiv;
    div.addEventListener('mouseover', function(){
        div.innerHTML = div.id;
    })
    div.addEventListener('mouseleave', function() {
        div.innerHTML = '';
    })
    div.addEventListener('click', function() {
        var ranNum = Math.floor(Math.random() * colors.length);
        div.style.backgroundColor = colors[ranNum];
    });
    div.addEventListener('dblclick', function() {
        if(div.id % 2 == 0) {
            if(div.nextSibling == null) {
                alert('No more boxes!')
            } else {
                div.nextSibling.remove();
            };
        } else {
            if(div.previousSibling == null) {
                alert('No more boxes!')
            } else {
                div.previousSibling.remove();
            };
        }
    });
});

