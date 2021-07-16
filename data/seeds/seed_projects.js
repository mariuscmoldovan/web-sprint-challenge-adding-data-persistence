exports.seed = function(knex) {
    
    return knex('projects').del()
      .then(function () {
        
        return knex('projects').insert([
          { project_name: 'Project A', project_description: 'descover somenting' },
          { project_name: 'Zoo', project_description: 'go to zoo', project_completed: 1 },
          { project_name: 'Amimals' }
        ]);
      });
  };