exports.seed = function(knex) {
    
    return knex('tasks').del()
    .then(function () {
      
        return knex('tasks').insert([
            { task_description: 'Do task 1', project_id: 1 },
            { task_description: 'Do task 2', task_notes: 'plese do this!', project_id: 1 },
            { task_description: 'Do task 3', task_notes: 'Have fun!', task_completed: 1, project_id: 2 }
        ]);
    });
};