exports.seed = function(knex) {
    
    return knex('resources').del()
    .then(function () {
        
        return knex('resources').insert([
            { resource_name: 'resource1' },
            { resource_name: 'resource2', resource_description: 'description 2' }
        ]);
    });
};