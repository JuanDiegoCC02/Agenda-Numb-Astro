async function getTasks() {
    try {
        const response = await fetch('http://localhost:3000/tasks', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching task');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching tasks:', error);
        throw error;
    }
}



//////////LLAMADO POST//////////

async function postTasks(title, description, taskDay) {
    try {
     
        const taskData = { 
            title,
            description,
            taskDay
        
        };



        const response = await fetch("http://localhost:3000/tasks", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(taskData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting task:', error);
        throw error;
    }
}



//////////////LLAMADO UPDATE/////////////


async function updateTasks(task, id) {
  try {
    const response = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    return await response.json();
  } catch (error) {
    console.error('Error update task:', error);
    throw error;
  }
}






//////////////LLAMADO DELETE/////////////


async function deleteTasks(id) {
    try {
        const response = await fetch(`http://localhost:3000/tasks/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting task with id ${id}`);
        }

        return { message: `Task with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting task:', error);
        throw error;
    }
}





export { getTasks, postTasks, updateTasks, deleteTasks };   