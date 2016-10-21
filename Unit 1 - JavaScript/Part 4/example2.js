(function() {
    'use strict';

    function loadTasks() {
        var http = new XMLHttpRequest();
        http.open('GET', '/tasks/tasks', true);
        http.send();

        http.addEventListener('readystatechange', function() {
            if(http.readyState === 4 && http.status === 200) {
                showTasks(JSON.parse(http.responseText));
            }
        });
    }

    function loadTask(id) {
        var http = new XMLHttpRequest();
        http.open('GET', '/tasks/tasks/' + id, true);
        http.send();

        http.addEventListener('readystatechange', function() {
            if(http.readyState === 4 && http.status === 200) {
                var task = JSON.parse(http.responseText)
                var pDesc = document.getElementById("description");
                pDesc.textContent = task.description;
            }
        });
    }

    function showTasks(tasks) {
        var div = document.getElementById("tasks");
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
        tasks.forEach(function(task) {
            var p = document.createElement("p");
            var spanTitle = document.createElement("span");
            spanTitle.style.cursor = "pointer";
            spanTitle.textContent = task.title;
            p.appendChild(spanTitle);

            var spanDelete = document.createElement("span");
            spanDelete.style.color = "red";
            spanDelete.style.marginLeft = "10px";
            spanDelete.style.cursor = "pointer";
            spanDelete.textContent = "x";
            p.appendChild(spanDelete);

            spanDelete.addEventListener('click', function(event) {
                var id = task.id;
                deleteTask(id, event.target.parentNode);
            });

            spanTitle.addEventListener('click', function(event) {
                var id = task.id;
                loadTask(id);
            });

            div.appendChild(p);
        });
    }

    function addTask(titleTask, descTask) {
        var http = new XMLHttpRequest();
        http.open('POST', '/tasks/tasks', true);
        http.send(JSON.stringify({
            title: titleTask,
            description: descTask
        }));

        http.addEventListener('readystatechange', function() {
            if(http.readyState === 4 && http.status === 200) {
                var json = JSON.parse(http.responseText);
                if(json.ok) {
                    alert("The task was created!");
                    loadTasks();
                } else {
                    alert(json.error);
                }
                formNew.reset();
            }
        });
    }

    function deleteTask(idTask, element) {
        var http = new XMLHttpRequest();
        http.open('DELETE', '/tasks/tasks/' + idTask, true);
        http.send();

        http.addEventListener('readystatechange', function() {
            if(http.readyState === 4 && http.status === 200) {
                element.parentNode.removeChild(element);
            }
        });
    }

    var loadButton = document.getElementById("loadTasks");
    loadButton.addEventListener('click', loadTasks);

    var formNew = document.getElementById("newTask");
    formNew.addEventListener('submit', function(event) {
        var title = document.getElementById("title").value;
        var desc = document.getElementById("desc").value;

        event.preventDefault();
        addTask(title, desc);
    });

})();

