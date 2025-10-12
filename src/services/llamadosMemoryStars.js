async function getMemoryStars() {
    try {
        const response = await fetch('http://localhost:3000/memoryStars', {
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


async function updateMemoryStars(task, id) {
  try {
    const response = await fetch(`http://localhost:3000/memoryStars/${id}`, {
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

export {getMemoryStars, updateMemoryStars}