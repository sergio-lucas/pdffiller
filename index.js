(function() {

    var params = {
        lines: [
            {
                background: '#00f',
                updateTime: 1000,
                elements: [
                    {
                        background: '#2196f3',
                        width: 25
                    },
                    {
                        background: '#ccc',
                        width: 35
                    },
                    {
                        background: '#fff',
                        width: 40
                    }
                ]
            },
            {
                background: 'green',
                updateTime: 300,
                elements: [
                    {
                        background: '#ddd',
                        width: 35
                    },
                    {
                        background: '#3a78b7',
                        width: 45
                    },
                    {
                        background: '#fff',
                        width: 20
                    }
                ]
            },
            {
                background: 'red',
                updateTime: 500,
                elements: [
                    {
                        background: '#fff',
                        width: 15
                    },
                    {
                        background: '#ccc',
                        width: 15
                    },
                    {
                        background: '#eee',
                        width: 70
                    }
                ]
            }
        ]
    }
    
    function randomCoolor() {
        var color = Math.random().toString(16).substr(-6);

        return '#' + color;
    }

    function newLine(line, height) {
        var lineDOM = document.createElement("div"),
            elementsDOM = document.createElement("div");

        lineDOM.className = 'line';
        elementsDOM.className = 'line_container'
        lineDOM.style.backgroundColor = line.background;
        lineDOM.style.height = height + 'px';
        if (line.elements.length) {
            line.elements.map(function(element) {
                elementsDOM.appendChild(printElement(element))
            })
        }
        lineDOM.appendChild(elementsDOM);
        setInterval(function() {
            lineDOM.style.backgroundColor = randomCoolor();
        }, line.updateTime)

        return lineDOM;
    }

    function printElement(element) {
        var elementDOM = document.createElement("div");

        elementDOM.style.backgroundColor = element.background;
        elementDOM.style.width = element.width + "%";
        elementDOM.style.height = '100%';

        return elementDOM;
    }

    function init(params) {
        var app = document.querySelector('#app'),
            DOMLines = document.createElement("div"),
            height = window.innerHeight,
            lineHeight;

        if (params) {
            lineHeight = height / params.lines.length
            params.lines.map(function(line) {
                DOMLines.appendChild(newLine(line, lineHeight))
            })
        }

        app.appendChild(DOMLines);
    }
    
    init(params);

})();